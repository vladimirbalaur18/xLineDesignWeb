import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";
import { generateToken, createAdminUser } from "@/lib/auth";

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

    // Verify OTP
    const telegramService = getTelegramService();
    const isValid = telegramService.verifyOTP(sessionId, code);

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
        message: "Authentication successful",
        token,
        user,
      },
      { status: 200 }
    );

    // Set secure HTTP-only cookie
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("OTP verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
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
