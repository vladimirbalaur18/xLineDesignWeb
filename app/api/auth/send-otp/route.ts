import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

  try {
    const ip = getClientIp(request);
    const key = `rl:otp:send:ip:${ip}`;
    const limit = 3;
    const windowSeconds = 60 * 5;
    const rl = await rateLimit(key, limit, windowSeconds, requestContext);

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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify({
      success: true,
      message: "OTP sent successfully",
      sessionId,
      expires,
    }).length;

    // Log successful OTP send with detailed request information
    logger.otpSent({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime
      ),
      sessionId,
      statusCode: 200,
      metadata: { expires },
    });

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
    const commonLogDetails = {
      action: "otp_failed",
      ...requestContext,
      error: "Failed to send OTP",
      statusCode: 500,
    };

    if (error instanceof Error) {
      logger.errorWithStack(commonLogDetails, error);
    } else {
      logger.otpFailed(commonLogDetails);
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send OTP", // Generic error message for security
      },
      { status: 500 }
    );
  }
}
