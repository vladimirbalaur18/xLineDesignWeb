import { configureAuth } from "react-query-auth";
import { AdminUser } from "@/lib/auth";
import type {
  SendOtpResponse,
  VerifyOtpResponse,
  AuthStatusResponse,
  LogoutResponse,
} from "@shared/api/auth";

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
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
        console.error("Error fetching user:", error);
        return null;
      }
    },
    loginFn: async ({
      otpCode,
      sessionId,
    }: {
      otpCode: string;
      sessionId: string;
    }): Promise<AdminUser | null> => {
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
    registerFn: async (): Promise<AdminUser | null> => {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Registration failed: ${response.status}`);
      }

      const data: SendOtpResponse = await response.json();

      if (data.success) {
        // Return fake AdminUser with sessionId so component can access it
        return {
          id: "temp-admin",
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
