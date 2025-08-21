"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

/**
 * Wraps its children with a React Query provider so descendant components can use the shared query client.
 *
 * Renders a QueryClientProvider with the preconfigured `queryClient` and returns the provided `children` inside that context.
 *
 * @param children - React nodes rendered inside the QueryClientProvider.
 * @returns The `children` wrapped by a QueryClientProvider.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
