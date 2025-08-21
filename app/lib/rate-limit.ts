import { getRedis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter: number; // seconds
  current: number;
}

const limiterCache = new Map<string, Ratelimit>();

/**
 * Return a cached or newly created Upstash `Ratelimit` configured for a fixed-time window.
 *
 * Creates and caches a Ratelimit instance keyed by `limit:windowSeconds`. The returned limiter
 * enforces at most `limit` requests per `windowSeconds` (fixed-window strategy) and reuses the
 * same instance for subsequent calls with the same parameters.
 *
 * @param limit - Maximum number of requests allowed per window.
 * @param windowSeconds - Window length in seconds for the fixed-window limiter.
 * @returns A configured `Ratelimit` instance (cached by `limit` and `windowSeconds`).
 */
function getFixedWindowLimiter(
  limit: number,
  windowSeconds: number
): Ratelimit {
  const cacheKey = `${limit}:${windowSeconds}`;
  const cached = limiterCache.get(cacheKey);
  if (cached) return cached;

  const limiter = new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.fixedWindow(limit, `${windowSeconds} s`),
    analytics: false,
  });
  limiterCache.set(cacheKey, limiter);
  return limiter;
}

/**
 * Enforces a fixed-window rate limit for the given key and returns the limit state.
 *
 * Applies a cached fixed-window limiter (configured with `limit` and `windowSeconds`) for `key`
 * and computes a normalized RateLimitResult.
 *
 * @param key - Identifier for the client or resource being rate limited (e.g., IP or user ID).
 * @param limit - Maximum allowed requests per window.
 * @param windowSeconds - Window length in seconds for the fixed window.
 * @returns An object describing whether the request is allowed and the current rate limit state:
 *  - `allowed`: whether the action is permitted.
 *  - `remaining`: non-negative number of requests left in the current window.
 *  - `retryAfter`: seconds until the limit resets (0 when allowed).
 *  - `current`: number of requests used in the current window (clamped to >= 0).
 */
export async function rateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const limiter = getFixedWindowLimiter(limit, windowSeconds);
  const result = await limiter.limit(key);
  const now = Date.now();
  const retryAfterSeconds = result.success
    ? 0
    : Math.max(0, Math.ceil((result.reset - now) / 1000));
  const remaining = Math.max(0, result.remaining);
  const current = Math.max(0, limit - remaining);

  return {
    allowed: result.success,
    remaining,
    retryAfter: retryAfterSeconds,
    current,
  };
}

/**
 * Extracts the client's IP address from request headers.
 *
 * Checks the `x-forwarded-for` header and returns its first comma-separated entry (trimmed) if present,
 * otherwise falls back to `x-real-ip`. Returns `"unknown"` when neither header provides an IP.
 *
 * @returns The client IP string or `"unknown"` when unavailable.
 */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const ip = xff.split(",")[0]?.trim();
    if (ip) return ip;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
