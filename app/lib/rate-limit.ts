import "server-only";
import { getRedis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { logger } from "@/lib/logger";

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter: number; // seconds
  current: number;
}

export interface GradualRateLimitConfig {
  baseLimit: number;
  baseWindowSeconds: number;
  escalateOnOverage: number; // number of extra attempts while limited to trigger penalty 1
  penalty1Seconds: number; // e.g., 1 hour
  penalty2EscalateOverage: number; // number of subsequent requests after penalty 1 to trigger penalty 2
  penalty2Seconds: number; // e.g., 1 day
  postPenaltyCountTtlSeconds: number; // monitoring window for penalty2Threshold
}

export interface GradualRateLimitResult extends RateLimitResult {
  state: "allowed" | "limited" | "penalized";
  penaltyLevel?: 0 | 1 | 2;
  penaltySeconds?: number;
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
 * Gradual rate limit with escalating penalties.
 * Default policy: 5 req / 5 min; if during the limited window there are +3 attempts → block 1h;
 * after that hour, if there are 10 more requests → block 1 day.
 */
export async function gradualRateLimit(
  key: string,
  config: Partial<GradualRateLimitConfig> = {},
  context?: { ip?: string; userAgent?: string; path?: string }
): Promise<GradualRateLimitResult> {
  const cfg: GradualRateLimitConfig = {
    // The maximum number of requests allowed in the base time window
    baseLimit: config.baseLimit ?? 50,
    // The duration of the base time window in seconds
    baseWindowSeconds: config.baseWindowSeconds ?? 60 * 5,
    // The number of requests over the base limit that triggers the first penalty
    escalateOnOverage: config.escalateOnOverage ?? 10,
    // The duration of the first penalty in seconds
    penalty1Seconds: config.penalty1Seconds ?? 60 * 60,
    // The number of requests during the first penalty that triggers the second penalty
    penalty2EscalateOverage: config.penalty2EscalateOverage ?? 10,
    // The duration of the second penalty in seconds
    penalty2Seconds: config.penalty2Seconds ?? 60 * 60 * 24,
    // The time-to-live for counting requests after a penalty, in seconds
    postPenaltyCountTtlSeconds:
      config.postPenaltyCountTtlSeconds ?? 60 * 60 * 24,
  };

  const redis = getRedis();
  const penaltyKey = `rl:gradual:${key}:penalty`;
  const overageKey = `rl:gradual:${key}:overage`;
  const postPenaltyKey = `rl:gradual:${key}:post1-count`;

  // Check active penalty first
  const activePenaltyLevel = await redis.get<string>(penaltyKey);

  if (activePenaltyLevel) {
    const ttl = await redis.ttl(penaltyKey);
    const retryAfter = Math.max(0, ttl ?? cfg.penalty1Seconds);
    logger.rateLimitExceeded({
      key,
      limit: cfg.baseLimit,
      windowSeconds: cfg.baseWindowSeconds,
      remaining: 0,
      retryAfter,
      ip: context?.ip,
      userAgent: context?.userAgent,
      path: context?.path,
      metadata: {
        state: "penalized",
        penaltyLevel: Number(activePenaltyLevel),
        ttl,
        penaltyKey,
      },
    });
    return {
      allowed: false,
      remaining: 0,
      retryAfter,
      current: cfg.baseLimit,
      state: "penalized",
      penaltyLevel: Number(activePenaltyLevel) as 1 | 2,
      penaltySeconds: retryAfter,
    };
  }

  // Apply base limiter
  const limiter = getFixedWindowLimiter(cfg.baseLimit, cfg.baseWindowSeconds);
  const result = await limiter.limit(key);
  const now = Date.now();
  const baseRetryAfter = result.success
    ? 0
    : Math.max(0, Math.ceil((result.reset - now) / 1000));
  const remaining = Math.max(0, result.remaining);
  const current = Math.max(0, cfg.baseLimit - remaining);

  if (result.success) {
    // If monitoring after a level 1 penalty, count requests and escalate if necessary
    const postPenaltyExists = await redis.exists(postPenaltyKey);
    if (postPenaltyExists) {
      const postPenaltyCount = await redis.incr(postPenaltyKey);
      await redis.expire(postPenaltyKey, cfg.postPenaltyCountTtlSeconds);
      logger.rateLimitAllowed({
        key,
        limit: cfg.baseLimit,
        windowSeconds: cfg.baseWindowSeconds,
        remaining,
        ip: context?.ip,
        userAgent: context?.userAgent,
        path: context?.path,
        metadata: {
          state: "allowed",
          current,
          postPenaltyCount: postPenaltyCount,
          penalty2Threshold: cfg.penalty2EscalateOverage,
        },
      });
      if (postPenaltyCount >= cfg.penalty2EscalateOverage) {
        await redis.set(penaltyKey, "2", { ex: cfg.penalty2Seconds });
        await redis.del(postPenaltyKey);
        logger.rateLimitExceeded({
          key,
          limit: cfg.baseLimit,
          windowSeconds: cfg.baseWindowSeconds,
          remaining,
          retryAfter: cfg.penalty2Seconds,
          ip: context?.ip,
          userAgent: context?.userAgent,
          path: context?.path,
          metadata: {
            state: "penalized",
            penaltyLevel: 2,
            triggeredBy: "post_penalty_threshold",
            postCount: postPenaltyCount,
          },
        });
        return {
          allowed: false,
          remaining,
          retryAfter: cfg.penalty2Seconds,
          current,
          state: "penalized",
          penaltyLevel: 2,
          penaltySeconds: cfg.penalty2Seconds,
        };
      }
    }

    // Only log if we didn't already log above (for post-penalty monitoring)
    if (!postPenaltyExists) {
      logger.rateLimitAllowed({
        key,
        limit: cfg.baseLimit,
        windowSeconds: cfg.baseWindowSeconds,
        remaining,
        ip: context?.ip,
        userAgent: context?.userAgent,
        path: context?.path,
        metadata: { state: "allowed", current },
      });
    }
    return {
      allowed: true,
      remaining,
      retryAfter: 0,
      current,
      state: "allowed",
      penaltyLevel: 0,
    };
  }

  // Limited by base rate limiter; track overage attempts within the window
  const over = await redis.incr(overageKey);
  await redis.expire(overageKey, baseRetryAfter || cfg.baseWindowSeconds);

  logger.rateLimitExceeded({
    key,
    limit: cfg.baseLimit,
    windowSeconds: cfg.baseWindowSeconds,
    remaining,
    retryAfter: baseRetryAfter,
    ip: context?.ip,
    userAgent: context?.userAgent,
    path: context?.path,
    metadata: {
      state: "limited",
      current,
      overageCount: over,
      overageThreshold: cfg.escalateOnOverage,
      overageKey,
    },
  });

  if (cfg.escalateOnOverage > 0 && over >= cfg.escalateOnOverage) {
    // Set penalty level 1 and start post-penalty monitoring window
    await redis.set(penaltyKey, "1", { ex: cfg.penalty1Seconds });
    // Start post-penalty counter window (will start counting after penalty ends)
    await redis.set(postPenaltyKey, 0, {
      ex: cfg.penalty1Seconds + cfg.postPenaltyCountTtlSeconds,
    });
    logger.rateLimitExceeded({
      key,
      limit: cfg.baseLimit,
      windowSeconds: cfg.baseWindowSeconds,
      remaining,
      retryAfter: cfg.penalty1Seconds,
      ip: context?.ip,
      userAgent: context?.userAgent,
      path: context?.path,
      metadata: {
        state: "penalized",
        penaltyLevel: 1,
        triggeredBy: "overage_attempts",
        overage: over,
      },
    });
    return {
      allowed: false,
      remaining,
      retryAfter: cfg.penalty1Seconds,
      current,
      state: "penalized",
      penaltyLevel: 1,
      penaltySeconds: cfg.penalty1Seconds,
    };
  }

  // If we reach here, we're limited but haven't triggered escalation yet
  return {
    allowed: false,
    remaining,
    retryAfter: baseRetryAfter,
    current,
    state: "limited",
    penaltyLevel: 0,
  };
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
