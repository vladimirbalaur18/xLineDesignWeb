import { getRedis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter: number; // seconds
  current: number;
}

const limiterCache = new Map<string, Ratelimit>();

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
