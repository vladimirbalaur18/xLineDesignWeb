import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "./app/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes
  if (pathname.startsWith("/admin")) {
    // Skip API routes - they handle their own auth
    if (pathname.startsWith("/admin/api")) {
      return NextResponse.next();
    }

    try {
      const user = await authenticateRequest(request);

      // If not authenticated, redirect to login page or show unauthorized
      if (!user) {
        // Instead of redirecting, let the client-side handle authentication
        // This allows the AdminAuthWrapper to show the login form
        return NextResponse.next();
      }

      // User is authenticated, continue
      return NextResponse.next();
    } catch (error) {
      console.error("Middleware auth check failed:", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
