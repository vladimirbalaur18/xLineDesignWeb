import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

/**
 * Handle POST requests to send a one-time password (OTP) via the Telegram service,
 * enforcing per-IP rate limiting.
 *
 * Applies a limit of 3 requests per 5 minutes per client IP. If the limit is exceeded
 * the handler responds with HTTP 429 and a `Retry-After` header. On success it returns
 * HTTP 200 with JSON `{ success: true, message: "OTP sent successfully", sessionId, expires }`.
 * On unexpected errors it returns HTTP 500 with JSON `{ success: false, message }`.
 */
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
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "otp_failed",
          ...requestContext,
          error: "Failed to send OTP",
          statusCode: 500,
        },
        error
      );
    } else {
      logger.otpFailed({
        ...requestContext,
        error: "Failed to send OTP",
        statusCode: 500,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send OTP",
      },
      { status: 500 }
    );
  }
}

/**
 * Responds to GET requests with a 405 Method Not Allowed JSON response.
 *
 * Returns a NextResponse containing `{ success: false, message: "Method not allowed" }`
 * and HTTP status 405. This route only accepts POST requests for sending OTPs.
 *
 * @returns A NextResponse with a 405 status and a JSON payload indicating the method is not allowed.
 */
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed",
    },
    { status: 405 }
  );
}
