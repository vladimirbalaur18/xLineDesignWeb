import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const key = `rl:otp:send:ip:${ip}`;
    const limit = 3;
    const windowSeconds = 60 * 5;
    const rl = await rateLimit(key, limit, windowSeconds, { ip });

    if (!rl.allowed) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message:
            "Prea multe încercări de OTP. Vă rugăm să încercați mai târziu.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(rl.retryAfter),
          },
        }
      );
    }

    const telegramService = getTelegramService();
    const { sessionId, expires } = await telegramService.sendOTP();

    return NextResponse.json(
      {
        success: true,
        message:
          "Codul OTP a fost trimis cu succes. Vă rugăm să verificați Telegram pentru a vă autentifica.",
        sessionId,
        expires,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Nu s-a putut trimite codul OTP",
      },
      { status: 500 }
    );
  }
}
