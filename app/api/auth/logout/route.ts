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
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "logout_error",
          ...requestContext,
          error: "Logout error",
          statusCode: 500,
        },
        error
      );
    } else {
      logger.error({
        action: "logout_error",
        ...requestContext,
        error: "Logout error",
        statusCode: 500,
      });
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
