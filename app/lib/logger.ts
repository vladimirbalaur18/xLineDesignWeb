import { NextRequest } from "next/server";

export interface LogContext {
  action: string;
  ip?: string;
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  method?: string;
  path?: string;
  statusCode?: number;
  error?: string;
  errorDetails?: {
    message: string;
    stack?: string;
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    functionName?: string;
  };
  metadata?: Record<string, any>;
  timestamp: string;
  // Request details for CRUD operations
  requestDetails?: {
    queryParams?: Record<string, string>;
    requestBody?: any;
    requestHeaders?: Record<string, string>;
    responseSize?: number;
    processingTime?: number;
    databaseQueries?: number;
  };
}

export interface RateLimitLogContext extends LogContext {
  action: "rate_limit_exceeded" | "rate_limit_allowed";
  key: string;
  limit: number;
  windowSeconds: number;
  remaining: number;
  retryAfter?: number;
}

export interface AuthLogContext extends LogContext {
  action:
    | "login_attempt"
    | "login_success"
    | "login_failure"
    | "logout"
    | "otp_sent"
    | "otp_verified"
    | "otp_failed";
  sessionId?: string;
  code?: string;
}

export interface ContactLogContext extends LogContext {
  action:
    | "contact_form_submitted"
    | "contact_form_spam"
    | "contact_form_error"
    | "contact_form_validation_error"
    | "contact_form_config_error";
  email?: string;
  name?: string;
  messageLength?: number;
}

export interface ProjectLogContext extends LogContext {
  action:
    | "project_created"
    | "project_updated"
    | "project_deleted"
    | "project_viewed";
  projectId?: string;
  projectSlug?: string;
  changes?: Record<string, any>;
}

class Logger {
  private sanitizeData(data: any): any {
    if (typeof data === "string") {
      // Remove sensitive patterns
      return data
        .replace(
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
          "[EMAIL]"
        )
        .replace(/\b\d{10,13}\b/g, "[PHONE]")
        .replace(/\b[A-Za-z0-9]{20,}\b/g, "[TOKEN]")
        .replace(/bot\d+:[A-Za-z0-9_-]+/g, "[BOT_TOKEN]");
    }
    if (typeof data === "object" && data !== null) {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(data)) {
        if (
          ["password", "token", "secret", "key", "auth"].includes(
            key.toLowerCase()
          )
        ) {
          sanitized[key] = "[REDACTED]";
        } else {
          sanitized[key] = this.sanitizeData(value);
        }
      }
      return sanitized;
    }
    return data;
  }

  private formatLog(context: LogContext): string {
    const sanitizedMetadata = this.sanitizeData(context.metadata);
    const logEntry = {
      ...context,
      metadata: sanitizedMetadata,
    };

    return JSON.stringify(logEntry, null, 2);
  }

  private log(level: "info" | "warn" | "error", context: LogContext): void {
    const logMessage = this.formatLog(context);

    switch (level) {
      case "info":
        console.log(`[INFO] ${logMessage}`);
        break;
      case "warn":
        console.warn(`[WARN] ${logMessage}`);
        break;
      case "error":
        console.error(`[ERROR] ${logMessage}`);
        break;
    }
  }

  // Rate limiting logs
  rateLimitExceeded(
    context: Omit<RateLimitLogContext, "action" | "timestamp">
  ): void {
    this.log("warn", {
      ...context,
      action: "rate_limit_exceeded",
      timestamp: new Date().toISOString(),
    });
  }

  rateLimitAllowed(
    context: Omit<RateLimitLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "rate_limit_allowed",
      timestamp: new Date().toISOString(),
    });
  }

  // Authentication logs
  authAttempt(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("info", {
      ...context,
      action: "login_attempt",
      timestamp: new Date().toISOString(),
    });
  }

  authSuccess(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("info", {
      ...context,
      action: "login_success",
      timestamp: new Date().toISOString(),
    });
  }

  authFailure(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("warn", {
      ...context,
      action: "login_failure",
      timestamp: new Date().toISOString(),
    });
  }

  otpSent(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("info", {
      ...context,
      action: "otp_sent",
      timestamp: new Date().toISOString(),
    });
  }

  otpVerified(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("info", {
      ...context,
      action: "otp_verified",
      timestamp: new Date().toISOString(),
    });
  }

  otpFailed(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("warn", {
      ...context,
      action: "otp_failed",
      timestamp: new Date().toISOString(),
    });
  }

  logout(context: Omit<AuthLogContext, "action" | "timestamp">): void {
    this.log("info", {
      ...context,
      action: "logout",
      timestamp: new Date().toISOString(),
    });
  }

  // Contact form logs
  contactSubmitted(
    context: Omit<ContactLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "contact_form_submitted",
      timestamp: new Date().toISOString(),
    });
  }

  contactSpam(context: Omit<ContactLogContext, "action" | "timestamp">): void {
    this.log("warn", {
      ...context,
      action: "contact_form_spam",
      timestamp: new Date().toISOString(),
    });
  }

  contactError(context: Omit<ContactLogContext, "action" | "timestamp">): void {
    this.log("error", {
      ...context,
      action: "contact_form_error",
      timestamp: new Date().toISOString(),
    });
  }

  contactValidationError(
    context: Omit<ContactLogContext, "action" | "timestamp">
  ): void {
    this.log("warn", {
      ...context,
      action: "contact_form_validation_error",
      timestamp: new Date().toISOString(),
    });
  }

  contactConfigError(
    context: Omit<ContactLogContext, "action" | "timestamp">
  ): void {
    this.log("error", {
      ...context,
      action: "contact_form_config_error",
      timestamp: new Date().toISOString(),
    });
  }

  // Project logs
  projectAction(
    context: Omit<ProjectLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "project_viewed",
      timestamp: new Date().toISOString(),
    });
  }

  projectCreated(
    context: Omit<ProjectLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "project_created",
      timestamp: new Date().toISOString(),
    });
  }

  projectUpdated(
    context: Omit<ProjectLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "project_updated",
      timestamp: new Date().toISOString(),
    });
  }

  projectDeleted(
    context: Omit<ProjectLogContext, "action" | "timestamp">
  ): void {
    this.log("info", {
      ...context,
      action: "project_deleted",
      timestamp: new Date().toISOString(),
    });
  }

  // Generic error logging
  error(context: Omit<LogContext, "timestamp">): void {
    this.log("error", {
      ...context,
      timestamp: new Date().toISOString(),
    });
  }

  // Enhanced error logging with stack trace and location
  errorWithStack(
    context: Omit<LogContext, "timestamp" | "errorDetails">,
    error: Error
  ): void {
    const errorDetails = this.extractErrorDetails(error);

    this.log("error", {
      ...context,
      errorDetails,
      timestamp: new Date().toISOString(),
    });
  }

  // Extract detailed error information
  private extractErrorDetails(error: Error): LogContext["errorDetails"] {
    const stackLines = error.stack?.split("\n") || [];

    // Find the first non-node_modules line in the stack trace
    const relevantStackLine = stackLines.find(
      (line) =>
        line.includes("at ") &&
        !line.includes("node_modules") &&
        !line.includes("internal/") &&
        !line.includes("next/") &&
        line.trim() !== "at Error (native)"
    );

    let fileName: string | undefined;
    let lineNumber: number | undefined;
    let columnNumber: number | undefined;
    let functionName: string | undefined;

    if (relevantStackLine) {
      // Parse stack trace line like: "at functionName (file:line:column)"
      const match = relevantStackLine.match(
        /at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/
      );
      if (match) {
        functionName = match[1];
        fileName = match[2];
        lineNumber = parseInt(match[3]);
        columnNumber = parseInt(match[4]);
      } else {
        // Fallback for different stack trace formats
        const simpleMatch = relevantStackLine.match(/at\s+(.+?):(\d+):(\d+)/);
        if (simpleMatch) {
          fileName = simpleMatch[1];
          lineNumber = parseInt(simpleMatch[2]);
          columnNumber = parseInt(simpleMatch[3]);
        }
      }
    }

    return {
      message: error.message,
      stack: error.stack,
      fileName,
      lineNumber,
      columnNumber,
      functionName,
    };
  }

  // Extract request context
  extractRequestContext(
    request: NextRequest,
    additionalData?: Record<string, any>
  ): Partial<LogContext> {
    // Extract query parameters
    const queryParams: Record<string, string> = {};
    request.nextUrl?.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    // Extract relevant headers (excluding sensitive ones)
    const relevantHeaders: Record<string, string> = {};
    const headerKeys = [
      "accept",
      "accept-language",
      "content-type",
      "content-length",
      "referer",
      "origin",
      "sec-fetch-dest",
      "sec-fetch-mode",
      "sec-fetch-site",
      "cache-control",
      "pragma",
      "authorization",
    ];

    headerKeys.forEach((key) => {
      const value = request.headers.get(key);
      if (value) {
        relevantHeaders[key] = value;
      }
    });

    // Enhanced IP extraction with better handling of localhost and IPv6
    const extractClientIP = (request: NextRequest): string => {
      // Check for forwarded IPs first (most reliable for production)
      const xForwardedFor = request.headers.get("x-forwarded-for");
      if (xForwardedFor) {
        const firstIP = xForwardedFor.split(",")[0]?.trim();
        if (firstIP && firstIP !== "::1" && firstIP !== "127.0.0.1") {
          return firstIP;
        }
      }

      // Check for real IP header
      const realIP = request.headers.get("x-real-ip");
      if (realIP && realIP !== "::1" && realIP !== "127.0.0.1") {
        return realIP;
      }

      // Check for CF-Connecting-IP (Cloudflare)
      const cfIP = request.headers.get("cf-connecting-ip");
      if (cfIP && cfIP !== "::1" && cfIP !== "127.0.0.1") {
        return cfIP;
      }

      // Check for X-Client-IP
      const clientIP = request.headers.get("x-client-ip");
      if (clientIP && clientIP !== "::1" && clientIP !== "127.0.0.1") {
        return clientIP;
      }

      // If we're in development/localhost, provide a more descriptive value
      if (process.env.NODE_ENV === "development") {
        return "localhost";
      }

      // Fallback for production when no valid IP is found
      return "unknown";
    };

    return {
      ip: extractClientIP(request),
      userAgent: request.headers.get("user-agent") || "unknown",
      method: request.method,
      path: request.nextUrl?.pathname,
      requestDetails: {
        queryParams,
        requestHeaders: relevantHeaders,
      },
      ...additionalData,
    };
  }

  // Helper method to add request body to context
  addRequestBody(context: Partial<LogContext>, body: any): Partial<LogContext> {
    return {
      ...context,
      requestDetails: {
        ...context.requestDetails,
        requestBody: this.sanitizeData(body),
      },
    };
  }

  // Helper method to add response details to context
  addResponseDetails(
    context: Partial<LogContext>,
    responseSize: number,
    processingTime: number,
    databaseQueries?: number
  ): Partial<LogContext> {
    return {
      ...context,
      requestDetails: {
        ...context.requestDetails,
        responseSize,
        processingTime,
        databaseQueries,
      },
    };
  }
}

export const logger = new Logger();
