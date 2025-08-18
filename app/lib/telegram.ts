import TelegramBot from "node-telegram-bot-api";

// In-memory storage for OTP codes (in production, use Redis or database)
const otpStore = new Map<
  string,
  { code: string; expires: number; used: boolean }
>();

export class TelegramOTPService {
  private bot: TelegramBot;
  private chatId: string;

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      throw new Error(
        "TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID must be set in environment variables"
      );
    }

    this.bot = new TelegramBot(token);
    this.chatId = chatId;
  }

  /**
   * Generate a 6-digit OTP code
   */
  private generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Send OTP code to configured Telegram chat
   */
  async sendOTP(): Promise<{ sessionId: string; expires: number }> {
    const code = this.generateOTP();
    const sessionId = this.generateSessionId();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

    // Store OTP
    otpStore.set(sessionId, {
      code,
      expires,
      used: false,
    });

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
      otpStore.delete(sessionId);
      throw new Error("Failed to send OTP code");
    }
  }

  /**
   * Verify OTP code
   */
  verifyOTP(sessionId: string, code: string): boolean {
    const otpData = otpStore.get(sessionId);

    if (!otpData) {
      return false;
    }

    // Check if expired
    if (Date.now() > otpData.expires) {
      otpStore.delete(sessionId);
      return false;
    }

    // Check if already used
    if (otpData.used) {
      return false;
    }

    // Check if code matches
    if (otpData.code !== code) {
      return false;
    }

    // Mark as used
    otpData.used = true;
    otpStore.set(sessionId, otpData);

    return true;
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Clean expired OTPs (call this periodically)
   */
  cleanExpiredOTPs(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    otpStore.forEach((otpData, sessionId) => {
      if (now > otpData.expires) {
        keysToDelete.push(sessionId);
      }
    });

    keysToDelete.forEach((key) => otpStore.delete(key));
  }
}

// Singleton instance
let telegramService: TelegramOTPService | null = null;

export function getTelegramService(): TelegramOTPService {
  if (!telegramService) {
    telegramService = new TelegramOTPService();
  }
  return telegramService;
}
