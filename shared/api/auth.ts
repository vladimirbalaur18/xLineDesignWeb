import type { AdminUser } from "@/lib/auth";

// /api/auth/send-otp (POST) - No request body
export interface SendOtpResponseSuccess {
  success: true;
  message: string;
  sessionId: string;
  expires: number;
}

export interface SendOtpResponseFailure {
  success: false;
  message: string;
}

export type SendOtpResponse = SendOtpResponseSuccess | SendOtpResponseFailure;

// /api/auth/verify-otp (POST)
export interface VerifyOtpRequest {
  sessionId: string;
  code: string;
}

export interface VerifyOtpResponseSuccess {
  success: true;
  message: string;
  user: AdminUser;
}

export interface VerifyOtpResponseFailure {
  success: false;
  message: string;
}

export type VerifyOtpResponse =
  | VerifyOtpResponseSuccess
  | VerifyOtpResponseFailure;

// /api/auth/status (GET)
export interface AuthStatusResponseAuthenticated {
  success: true;
  authenticated: true;
  user: AdminUser;
}

export interface AuthStatusResponseUnauthenticated {
  success: false;
  authenticated: false;
  message: string;
}

export type AuthStatusResponse =
  | AuthStatusResponseAuthenticated
  | AuthStatusResponseUnauthenticated;

// /api/auth/logout (POST)
export interface LogoutResponseSuccess {
  success: true;
  message: string;
}

export interface LogoutResponseFailure {
  success: false;
  message: string;
}

export type LogoutResponse = LogoutResponseSuccess | LogoutResponseFailure;
