import { Redis } from "@upstash/redis";

const globalForRedis = globalThis as unknown as {
  redis?: Redis;
};

/**
 * Returns a singleton Upstash Redis client, creating it on first call.
 *
 * On first invocation this reads KV_REST_API_URL and KV_REST_API_TOKEN from environment
 * variables and uses them to construct a Redis instance which is cached on `globalThis`
 * for reuse across module reloads. Subsequent calls return the cached instance.
 *
 * @returns The singleton `Redis` client.
 * @throws Error if `KV_REST_API_URL` or `KV_REST_API_TOKEN` is not set in environment variables.
 */
export function getRedis(): Redis {
  if (!globalForRedis.redis) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
      throw new Error(
        "KV_REST_API_URL and KV_REST_API_TOKEN must be set in environment variables"
      );
    }

    globalForRedis.redis = new Redis({ url, token });
  }

  return globalForRedis.redis;
}
