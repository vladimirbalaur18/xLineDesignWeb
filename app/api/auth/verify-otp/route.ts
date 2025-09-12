import { NextRequest, NextResponse } from "next/server";
import { getTelegramService, TelegramOTPService } from "@/lib/telegram";
import { generateToken, createAdminUser } from "@/lib/auth";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const { sessionId, code } = await request.json();

    // Validate input
    if (!sessionId || !code) {
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
      rateLimit(ipKey, ipLimit, windowSeconds, { ip }),
      rateLimit(sessionKey, sessionLimit, windowSeconds, { ip }),
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
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
