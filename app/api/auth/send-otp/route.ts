import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const key = `rl:otp:send:ip:${ip}`;
    const limit = 3;
    const windowSeconds = 60 * 5;
    const rl = await rateLimit(key, limit, windowSeconds);
    if (!rl.allowed) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Too many OTP requests. Please try again later.",
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
        message: "OTP sent successfully",
        sessionId,
        expires,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send OTP:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send OTP",
      },
      { status: 500 }
    );
  }
}

// Only POST method is allowed
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed",
    },
    { status: 405 }
  );
}
