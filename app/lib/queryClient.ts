"use client";

import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { parseApiError, ApiError } from "./api-errors";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    throw await parseApiError(res);
  }
}

export async function apiRequest<ResponseType>(
  method: string,
  url: string,
  data?: unknown | undefined
): Promise<ResponseType> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);

  // Handle no-content responses (204, 205, or explicit zero Content-Length)
  const contentLength = res.headers.get("content-length");
  if (res.status === 204 || res.status === 205 || contentLength === "0") {
    return undefined as ResponseType;
  }

  try {
    const data = (await res.json()) as ResponseType;
    return data;
  } catch (error) {
    // If JSON parsing fails, throw a more descriptive error
    throw new ApiError(
      "Invalid response format from server",
      res.status,
      false
    );
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);

    try {
      return await res.json();
    } catch (error) {
      // If JSON parsing fails, throw a more descriptive error
      throw new ApiError(
        "Invalid response format from server",
        res.status,
        false
      );
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
