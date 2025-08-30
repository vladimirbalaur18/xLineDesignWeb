import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { logger } from "@/lib/logger";

export async function GET(request: NextRequest) {
  try {
    const user = await authenticateRequest(request);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          authenticated: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        authenticated: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "auth_status_error",
          error: "Failed to get auth status",
          statusCode: 500,
        },
        error
      );
    } else {
      logger.error({
        action: "auth_status_error",
        error: "Failed to get auth status",
        statusCode: 500,
      });
    }

    return NextResponse.json(
      {
        success: false,
        authenticated: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
