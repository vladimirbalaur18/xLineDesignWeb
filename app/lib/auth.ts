import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger"; // Import logger
import { getTelegramService } from "./telegram";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const JWT_EXPIRY = "24h"; // Token expires in 24 hours

export interface AdminUser {
  id: string;
  role: "admin";
  loginTime: number;
  sessionId?: string; // Optional for send-otp response
}

/**
 * Generate JWT token for authenticated admin user
 */
export async function generateToken(user: AdminUser): Promise<string> {
  const jwt = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRY)
    .sign(JWT_SECRET);

  return jwt;
}

/**
 * Verify JWT token and return user data
 */
export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // Check if token contains required fields
    if (
      typeof payload.id === "string" &&
      payload.role === "admin" &&
      typeof payload.loginTime === "number"
    ) {
      return {
        id: payload.id,
        role: payload.role,
        loginTime: payload.loginTime,
      };
    }

    return null;
  } catch (error) {
    logger.errorWithStack(
      {
        action: "token_verification_failed",
        error: "Token verification failed",
      },
      error instanceof Error ? error : new Error(String(error))
    );
    return null;
  }
}

/**
 * Extract token from Authorization header or cookies
 */
export function extractToken(request: NextRequest): string | null {
  // Check Authorization header first
  const authHeader = request.headers.get("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }

  // Check cookies as fallback
  const tokenCookie = request.cookies.get("admin-token");
  if (tokenCookie) {
    return tokenCookie.value;
  }

  return null;
}

/**
 * Middleware helper to authenticate requests
 */
export async function authenticateRequest(
  request: NextRequest
): Promise<AdminUser | null> {
  const token = extractToken(request);
  if (!token) {
    return null;
  }

  const user = await verifyToken(token);

  return user;
}

/**
 * Create admin user object. Note: This assumes that the TelegramOTPService
 * is configured to only send OTPs to the chat ID specified in TELEGRAM_CHAT_ID.
 * The security of the admin user creation heavily relies on this assumption.
 */
export function createAdminUser(): AdminUser {
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramChatId) {
    throw new Error(
      "TELEGRAM_CHAT_ID is not defined. Please set it in your environment variables."
    );
  }

  if (isNaN(Number(telegramChatId))) {
    throw new Error(
      "TELEGRAM_CHAT_ID is not a valid numeric ID. Please ensure it is a number."
    );
  }

  return {
    id: telegramChatId,
    role: "admin",
    loginTime: Date.now(),
  };
}

/**
 * Middleware to protect API endpoints that require admin authentication
 * Returns the authenticated user if valid, or throws an error response
 */
export async function requireAdminAuth(
  request: NextRequest
): Promise<AdminUser> {
  const user = await authenticateRequest(request);

  if (!user) {
    // Redirect to login page if authentication fails
    return redirect("/admin/login");
  }

  return user;
}
