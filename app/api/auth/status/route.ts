import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";

/**
 * GET handler that reports the authentication status of the incoming request.
 *
 * Returns:
 * - 200 and JSON `{ success: true, authenticated: true, user }` when a user is authenticated.
 * - 401 and JSON `{ success: false, authenticated: false, message: "Not authenticated" }` when no user is found.
 * - 500 and JSON `{ success: false, authenticated: false, message: "Internal server error" }` on unexpected errors.
 *
 * @returns A NextResponse containing a JSON payload with the authentication result and, when applicable, the authenticated user.
 */
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
    console.error("Auth status error:", error);

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
