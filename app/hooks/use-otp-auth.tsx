"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type {
  AdminUser,
  AuthStatusResponse,
  LogoutResponse,
  LogoutResponseFailure,
  LogoutResponseSuccess,
  SendOtpResponse,
  SendOtpResponseFailure,
  SendOtpResponseSuccess,
  VerifyOtpResponse,
  VerifyOtpResponseFailure,
  VerifyOtpResponseSuccess,
} from "@/types/auth";
import { getErrorMessage } from "@/lib/api-errors";

interface OTPAuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  sendOTP: () => Promise<SendOtpResponse>;
  verifyOTP: (sessionId: string, code: string) => Promise<VerifyOtpResponse>;
  logout: () => Promise<LogoutResponse>;
  refreshAuth: () => void;
}

const OTPAuthContext = createContext<OTPAuthContextType | undefined>(undefined);

export function useOTPAuth() {
  const context = useContext(OTPAuthContext);
  if (!context) {
    throw new Error("useOTPAuth must be used within OTPAuthProvider");
  }
  return context;
}

export function OTPAuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<AdminUser | null>(null);
  const { data: authStatus } = useQuery({
    queryKey: ["auth-status"],
    queryFn: () => apiRequest<AuthStatusResponse>("GET", "/api/auth/status"),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
  const sendOTPMutation = useMutation({
    mutationFn: () => apiRequest<SendOtpResponse>("POST", "/api/auth/send-otp"),
  });
  const verifyOTPMutation = useMutation({
    mutationFn: (values: { code: string; sessionId: string }) =>
      apiRequest<VerifyOtpResponse>("POST", "/api/auth/verify-otp", {
        code: values.code,
        sessionId: values.sessionId,
      }),
  });

  const isLoading = useMemo(() => {
    return sendOTPMutation.isPending || verifyOTPMutation.isPending;
  }, [sendOTPMutation.isPending, verifyOTPMutation.isPending]);

  useEffect(() => {
    if (authStatus?.authenticated && authStatus.user) {
      setUser(authStatus.user);
    } else {
      setUser(null);
    }
  }, [authStatus?.authenticated, authStatus?.success]);

  const sendOTP = async () => {
    try {
      const data = await sendOTPMutation.mutateAsync();

      if (!data.success) {
        throw new Error(data.message);
      }

      return {
        success: true,
        message: data.message,
        sessionId: data.sessionId,
      } as SendOtpResponseSuccess;
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: getErrorMessage(error),
      } as SendOtpResponseFailure;
    }
  };

  const verifyOTP = async (sessionId: string, code: string) => {
    try {
      const data = await verifyOTPMutation.mutateAsync(
        { sessionId, code },
        {
          onSuccess: () => refreshAuth(),
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      return {
        success: true,
        message: data.message,
        user: data.user,
      } as VerifyOtpResponseSuccess;
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: getErrorMessage(error),
      } as VerifyOtpResponseFailure;
    }
  };
  const logout = async () => {
    try {
      const data = await apiRequest<LogoutResponse>("POST", "/api/auth/logout");

      if (!data.success) {
        throw new Error(data.message);
      }

      refreshAuth();

      return {
        success: true,
        message: data.message,
      } as LogoutResponseSuccess;
    } catch (error) {
      console.error(error);
      refreshAuth();
      return {
        success: false,
        message: getErrorMessage(error),
      } as LogoutResponseFailure;
    }
  };

  const refreshAuth = () => {
    queryClient.invalidateQueries({ queryKey: ["auth-status"] });
  };

  return (
    <OTPAuthContext.Provider
      value={{
        user,
        isAuthenticated: authStatus?.authenticated || false,
        isLoading,
        sendOTP,
        verifyOTP,
        logout,
        refreshAuth,
      }}
    >
      {children}
    </OTPAuthContext.Provider>
  );
}
