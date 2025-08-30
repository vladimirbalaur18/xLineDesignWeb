import { configureAuth } from "react-query-auth";
import { AdminUser } from "@/lib/auth";
import type {
  SendOtpResponse,
  VerifyOtpResponse,
  AuthStatusResponse,
  LogoutResponse,
} from "@shared/api/auth";
import { logger } from "@/lib/logger";

export const {
  useUser,
  useLogin,
  useRegister: useSendOtp,
  useLogout,
  AuthLoader,
} = configureAuth({
  userFn: async (): Promise<AdminUser | null> => {
    try {
      const response = await fetch("/api/auth/status", {
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          return null;
        }
      }

      const data: AuthStatusResponse = await response.json();

      if (data.success && data.authenticated && data.user) {
        return data.user as AdminUser;
      }

      return null;
    } catch (error) {
      logger.errorWithStack(
        {
          action: "fetch_user_error",
          error: "Error fetching user status",
        },
        error instanceof Error ? error : new Error(String(error))
      );
      return null;
    }
  },
  loginFn: async (variables: unknown): Promise<AdminUser | null> => {
    const { otpCode, sessionId } = variables as {
      otpCode: string;
      sessionId: string;
    };
    const response = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: otpCode,
        sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data: VerifyOtpResponse = await response.json();

    if (data.success) {
      return data.user;
    }

    return null;
  },
  registerFn: async (variables: unknown): Promise<AdminUser | null> => {
    const response = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: SendOtpResponse = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    if (data.success) {
      // Return a temporary AdminUser with sessionId.
      // This is not a fully authenticated user but carries the sessionId
      // needed for the next step (OTP verification).
      return {
        id: process.env.TELEGRAM_CHAT_ID!,
        role: "admin",
        loginTime: Date.now(),
        sessionId: data.sessionId,
      };
    }

    return null;
  },
  logoutFn: async (): Promise<void> => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Logout failed: ${response.status}`);
    }

    const data: LogoutResponse = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
  },
});
