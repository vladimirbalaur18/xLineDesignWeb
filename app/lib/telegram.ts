import TelegramBot from "node-telegram-bot-api";
import { getRedis } from "@/lib/redis";

class TelegramOTPService {
  private bot: TelegramBot;
  private chatId: string;
  private redisKeyPrefix = "otp:session:";

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      throw new Error(
        "TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID must be set in environment variables"
      );
    }

    this.bot = new TelegramBot(token, { polling: false });
    this.chatId = chatId;
  }

  /**
   * Generate a 6-digit OTP code
   */
  private generateOTP(): string {
    const crypto = require("crypto");
    return crypto.randomInt(100000, 1000000).toString();
  }

  /**
   * Send OTP code to configured Telegram chat
   */
  async sendOTP(): Promise<{ sessionId: string; expires: number }> {
    const code = this.generateOTP();
    const sessionId = this.generateSessionId();
    const ttlMs = 5 * 60 * 1000; // 5 minutes
    const expires = Date.now() + ttlMs;

    // Store OTP in Redis with TTL
    const redis = getRedis();
    const key = `${this.redisKeyPrefix}${sessionId}`;
    await redis.set(key, { code }, { ex: Math.ceil(ttlMs / 1000) });

    // Send to Telegram
    const message = `
🔐 *Admin Login Request*

Your OTP code is: \`${code}\`

This code will expire in 5 minutes.
Do not share this code with anyone.

Session ID: \`${sessionId}\`
    `;

    try {
      await this.bot.sendMessage(this.chatId, message, {
        parse_mode: "Markdown",
      });

      return { sessionId, expires };
    } catch (error) {
      console.error("Failed to send Telegram message:", error);
      // Clean up stored OTP on send failure
      const redis = getRedis();
      await redis.del(key);
      throw new Error("Failed to send OTP code");
    }
  }

  /**
   * Verify OTP code
   */
  async verifyOTP(sessionId: string, code: string): Promise<boolean> {
    const redis = getRedis();
    const key = `${this.redisKeyPrefix}${sessionId}`;
    const otpData = await redis.get<{ code: string }>(key);

    if (!otpData) {
      return false;
    }

    if (otpData.code !== code) {
      return false;
    }

    // Invalidate OTP to prevent reuse
    await redis.del(key);
    return true;
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    const crypto = require("crypto");
    return crypto.randomBytes(16).toString("hex");
  }
}

// Ensure true singleton across module reloads (dev) and within the same Node.js process
const globalForTelegram = globalThis as unknown as {
  telegramService?: TelegramOTPService;
};

/**
 * Returns the singleton TelegramOTPService instance, creating it on first use.
 *
 * The instance is cached on a module-global attached to `globalThis`, ensuring the same service is reused across imports and (where applicable) during hot reloads.
 *
 * @returns The shared TelegramOTPService instance
 */
export function getTelegramService(): TelegramOTPService {
  if (!globalForTelegram.telegramService) {
    globalForTelegram.telegramService = new TelegramOTPService();
  }
  return globalForTelegram.telegramService;
}
