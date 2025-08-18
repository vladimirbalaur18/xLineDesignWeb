import { NextRequest, NextResponse } from "next/server";
import { getTelegramService } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  try {
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
