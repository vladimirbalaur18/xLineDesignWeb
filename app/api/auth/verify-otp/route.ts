import { NextRequest, NextResponse } from "next/server";
import { getTelegramService, TelegramOTPService } from "@/lib/telegram";
import { generateToken, createAdminUser } from "@/lib/auth";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

  try {
    const { sessionId, code } = await request.json();
    // Add request body to context
    const contextWithBody = logger.addRequestBody(requestContext, {
      sessionId,
      code,
    });

    // Validate input
    if (!sessionId || !code) {
      logger.otpFailed({
        ...requestContext,
        sessionId,
        error: "Missing sessionId or code",
        statusCode: 400,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Session ID and OTP code are required",
        },
        { status: 400 }
      );
    }

    // Rate limit by IP and by session
    const ip = getClientIp(request);
    const ipKey = `rl:otp:verify:ip:${ip}`;
    const sessionKey = `rl:otp:verify:session:${sessionId}`;
    const windowSeconds = 60 * 5;
    const ipLimit = 10; // attempts per 5 minutes per IP
    const sessionLimit = 5; // attempts per 5 minutes per session
    const [ipRl, sessionRl] = await Promise.all([
      rateLimit(ipKey, ipLimit, windowSeconds, requestContext),
      rateLimit(sessionKey, sessionLimit, windowSeconds, requestContext),
    ]);
    if (!ipRl.allowed || !sessionRl.allowed) {
      const retryAfter = Math.max(ipRl.retryAfter, sessionRl.retryAfter);
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Too many verification attempts. Please try again later.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    // Verify OTP
    const telegramService = getTelegramService();

    const isValid = await telegramService.verifyOTP(sessionId, code);

    if (!isValid) {
      logger.otpFailed({
        ...requestContext,
        sessionId,
        code,
        error: "Invalid or expired OTP code",
        statusCode: 401,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired OTP code",
        },
        { status: 401 }
      );
    }

    // Generate JWT token
    const user = createAdminUser();
    const token = await generateToken(user);

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify({
      success: true,
      message: "Autentificare reușită",
      user,
    }).length;

    // Log successful verification with detailed request information
    logger.otpVerified({
      ...logger.addResponseDetails(
        contextWithBody,
        responseSize,
        processingTime
      ),
      sessionId,
      statusCode: 200,
      metadata: { userId: user.id },
    });

    // Create response with token in both body and cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Autentificare reușită",
        user,
      },
      { status: 200 }
    );

    // Set secure HTTP-only cookie
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    const commonLogDetails = {
      action: "otp_failed",
      ...requestContext,
      error: "OTP verification error",
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
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
