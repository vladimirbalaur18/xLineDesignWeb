import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

  try {
    // Create response
    const response = NextResponse.json(
      {
        success: true,
        message: "Logged out successfully",
      },
      { status: 200 }
    );

    // Clear the authentication cookie
    response.cookies.set("admin-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expire immediately
      path: "/",
    });

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify({
      success: true,
      message: "Logged out successfully",
    }).length;

    // Log successful logout with detailed request information
    logger.logout({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime
      ),
      statusCode: 200,
    });

    return response;
  } catch (error) {
    const commonLogDetails = {
      action: "logout_error",
      ...requestContext,
      error: "Logout error",
      statusCode: 500,
    };

    if (error instanceof Error) {
      logger.errorWithStack(commonLogDetails, error);
    } else {
      logger.error(commonLogDetails);
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
