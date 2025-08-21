"use client";

import { AdminProviders } from "./AdminProviders";
import AdminAuthWrapper from "./AdminAuthWrapper";

/**
 * Client-side wrapper that provides admin context and enforces admin authentication.
 *
 * Renders AdminProviders as the top-level provider and nests AdminAuthWrapper inside it.
 *
 * @returns The JSX element containing admin providers with an authentication wrapper.
 */
export default function AdminPageWrapper() {
  return (
    <AdminProviders>
      <AdminAuthWrapper />
    </AdminProviders>
  );
}
