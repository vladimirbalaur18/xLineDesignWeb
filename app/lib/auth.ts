import { SignJWT, jwtVerify } from "jose";
import { NextRequest } from "next/server";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const JWT_EXPIRY = "24h"; // Token expires in 24 hours

export interface AdminUser {
  id: string;
  role: "admin";
  loginTime: number;
}

/**
 * Create a time-limited JWT containing the admin user's data.
 *
 * The token payload includes the AdminUser fields (`id`, `role`, `loginTime`) and is signed
 * using the module's configured secret and HS256 algorithm. The token expires according to
 * the module's JWT_EXPIRY (24h).
 *
 * @param user - Admin user object to embed in the token; `role` is expected to be `"admin"`.
 * @returns A signed JWT as a string.
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
 * Verify a JWT and return the contained admin user if valid.
 *
 * Verifies `token` using the module's signing key and returns an AdminUser when:
 * - the token is a valid JWT signed by the expected secret, and
 * - the payload contains `id` (string), `role` equal to `"admin"`, and `loginTime` (number).
 *
 * Returns `null` if verification fails or the payload is missing/invalid.
 *
 * @param token - A JWT string expected to be signed with the application's secret.
 * @returns The decoded AdminUser when valid, otherwise `null`.
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
    console.error("Token verification failed:", error);
    return null;
  }
}

/**
 * Retrieve a JWT from an incoming request.
 *
 * Prefers an Authorization header with the `Bearer <token>` scheme; if absent,
 * falls back to the `admin-token` cookie. Returns the raw token string or `null`
 * if no token is present.
 *
 * @returns The token string when found, otherwise `null`.
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
 * Authenticate an incoming Next.js request and return the corresponding admin user.
 *
 * Returns the decoded AdminUser when a valid JWT is present (read from the
 * Authorization Bearer header or the `admin-token` cookie). Returns `null` if
 * no token is found or token verification fails.
 *
 * @returns The authenticated AdminUser, or `null` if authentication is unsuccessful.
 */
export async function authenticateRequest(
  request: NextRequest
): Promise<AdminUser | null> {
  const token = extractToken(request);

  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

/**
 * Create a default admin user representing the current session.
 *
 * Returns an AdminUser with `id` set to `"admin"`, `role` set to `"admin"`,
 * and `loginTime` set to the current timestamp (milliseconds since epoch).
 *
 * @returns A new AdminUser for the current session.
 */
export function createAdminUser(): AdminUser {
  return {
    id: "admin",
    role: "admin",
    loginTime: Date.now(),
  };
}
