import { getRedis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { logger } from "@/lib/logger";

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
  windowSeconds: number,
  context?: { ip?: string; userAgent?: string; path?: string }
): Promise<RateLimitResult> {
  const limiter = getFixedWindowLimiter(limit, windowSeconds);
  const result = await limiter.limit(key);
  const now = Date.now();
  const retryAfterSeconds = result.success
    ? 0
    : Math.max(0, Math.ceil((result.reset - now) / 1000));
  const remaining = Math.max(0, result.remaining);
  const current = Math.max(0, limit - remaining);

  const rateLimitResult = {
    allowed: result.success,
    remaining,
    retryAfter: retryAfterSeconds,
    current,
  };

  // Log rate limiting activity
  if (result.success) {
    logger.rateLimitAllowed({
      key,
      limit,
      windowSeconds,
      remaining,
      ip: context?.ip,
      userAgent: context?.userAgent,
      path: context?.path,
      metadata: { current },
    });
  } else {
    logger.rateLimitExceeded({
      key,
      limit,
      windowSeconds,
      remaining,
      retryAfter: retryAfterSeconds,
      ip: context?.ip,
      userAgent: context?.userAgent,
      path: context?.path,
      metadata: { current },
    });
  }

  return rateLimitResult;
}

/**
 * Extracts the client's IP address from request headers with enhanced localhost handling.
 *
 * Checks multiple headers in order of reliability and filters out localhost addresses.
 * In development, returns "localhost" for better readability.
 *
 * @returns The client IP string, "localhost" in development, or "unknown" when unavailable.
 */
export function getClientIp(req: Request): string {
  // Check for forwarded IPs first (most reliable for production)
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIP = xForwardedFor.split(",")[0]?.trim();
    if (firstIP && firstIP !== "::1" && firstIP !== "127.0.0.1") {
      return firstIP;
    }
  }

  // Check for real IP header
  const realIP = req.headers.get("x-real-ip");
  if (realIP && realIP !== "::1" && realIP !== "127.0.0.1") {
    return realIP;
  }

  // Check for CF-Connecting-IP (Cloudflare)
  const cfIP = req.headers.get("cf-connecting-ip");
  if (cfIP && cfIP !== "::1" && cfIP !== "127.0.0.1") {
    return cfIP;
  }

  // Check for X-Client-IP
  const clientIP = req.headers.get("x-client-ip");
  if (clientIP && clientIP !== "::1" && clientIP !== "127.0.0.1") {
    return clientIP;
  }

  // If we're in development/localhost, provide a more descriptive value
  if (process.env.NODE_ENV === "development") {
    return "localhost";
  }

  // Fallback for production when no valid IP is found
  return "unknown";
}
