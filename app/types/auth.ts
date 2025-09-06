export interface AdminUser {
  id: string;
  role: "admin";
  loginTime: number;
  sessionId?: string; // Optional for send-otp response
}

// /api/auth/send-otp (POST) - No request body
export interface SendOtpResponseSuccess {
  success: true;
  message: string;
  sessionId: string;
}

export interface SendOtpResponseFailure {
  success: false;
  message: string;
}

export type SendOtpResponse = (
  | SendOtpResponseSuccess
  | SendOtpResponseFailure
) & { success: unknown };

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

export type VerifyOtpResponse = (
  | VerifyOtpResponseSuccess
  | VerifyOtpResponseFailure
) & { success: boolean };

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

export type AuthStatusResponse = (
  | AuthStatusResponseAuthenticated
  | AuthStatusResponseUnauthenticated
) & { success: boolean };

// /api/auth/logout (POST)
export interface LogoutResponseSuccess {
  success: true;
  message: string;
}

export interface LogoutResponseFailure {
  success: false;
  message: string;
}

export type LogoutResponse = (LogoutResponseSuccess | LogoutResponseFailure) & {
  success: boolean;
};
