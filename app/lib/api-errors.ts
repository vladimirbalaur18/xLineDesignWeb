/**
 * Custom error class for API responses
 */
export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly success: boolean;
  public readonly retryAfter?: number;

  constructor(
    message: string,
    statusCode: number,
    success: boolean = false,
    retryAfter?: number
  ) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.success = success;
    this.retryAfter = retryAfter;
  }
}

/**
 * API response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

/**
 * Type guard to check if an error is an ApiError
 */
export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

/**
 * Type guard to check if a response has the expected API structure
 */
export function isApiResponse(obj: unknown): obj is ApiResponse {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "success" in obj &&
    "message" in obj &&
    typeof obj.success === "boolean" &&
    typeof obj.message === "string"
  );
}

/**
 * Parse API error from response
 */
export async function parseApiError(response: Response): Promise<ApiError> {
  try {
    const data = await response.json();

    if (isApiResponse(data)) {
      return new ApiError(
        data.message,
        response.status,
        data.success,
        response.headers.get("Retry-After")
          ? parseInt(response.headers.get("Retry-After")!)
          : undefined
      );
    }

    // Fallback for non-standard JSON responses
    return new ApiError(
      data.message || response.statusText || "A apărut o eroare",
      response.status,
      false
    );
  } catch (parseError) {
    // If JSON parsing fails, create error from response text or status
    const text = (await response.text()) || response.statusText;
    return new ApiError(text || "A apărut o eroare", response.status, false);
  }
}

/**
 * Helper to get user-friendly error message
 */
export function getErrorMessage(error: unknown): string {
  if (isApiError(error)) {
    // Handle specific error types
    switch (error.statusCode) {
      case 429:
        return error.retryAfter
          ? `${error.message} (Încercați din nou în ${error.retryAfter} secunde)`
          : error.message;
      case 401:
        return "Autentificare eșuată. Vă rugăm să verificați datele de autentificare.";
      case 403:
        return "Acces refuzat. Nu aveți permisiunea să executați această acțiune.";
      case 404:
        return "Resursa cerută nu a fost găsită.";
      case 422:
        return "Eroare de validare. Vă rugăm să verificați datele de intrare.";
      case 500:
        return "Eroare de server. Vă rugăm să încercați din nou mai târziu.";
      default:
        return error.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "A apărut o eroare neașteptată.";
}

/**
 * Check if error is a rate limit error
 */
export function isRateLimitError(error: unknown): boolean {
  return isApiError(error) && error.statusCode === 429;
}

/**
 * Check if error is an authentication error
 */
export function isAuthError(error: unknown): boolean {
  return (
    isApiError(error) && (error.statusCode === 401 || error.statusCode === 403)
  );
}
