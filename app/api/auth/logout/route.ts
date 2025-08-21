import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

/**
 * Logs out the current admin by clearing the "admin-token" cookie and returning a JSON success response.
 *
 * Clears the "admin-token" cookie (sets value to empty, httpOnly, sameSite 'strict', path '/', maxAge 0)
 * and sets the cookie's `secure` flag when NODE_ENV is "production". Returns a 200 JSON response
 * { success: true, message: "Logged out successfully" }. If an internal error occurs, returns a 500 JSON
 * response { success: false, message: "Internal server error" }.
 *
 * @returns A NextResponse containing the JSON result and appropriate HTTP status.
 */
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

/**
 * Rejects GET requests to the logout route.
 *
 * Returns a JSON NextResponse with { success: false, message: "Method not allowed" } and HTTP status 405.
 *
 * @returns A NextResponse indicating the GET method is not allowed for this route.
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
