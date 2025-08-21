"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { AuthProvider } from "@/hooks/use-auth";

/**
 * Supplies React Query and authentication context to its descendants.
 *
 * Wraps `children` with a shared `QueryClientProvider` (using the imported `queryClient`)
 * and an `AuthProvider` so child components can access React Query and authentication hooks.
 *
 * @param children - React nodes that will receive the providers' context.
 * @returns The provided `children` wrapped by `QueryClientProvider` and `AuthProvider`.
 */
export function AdminProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
