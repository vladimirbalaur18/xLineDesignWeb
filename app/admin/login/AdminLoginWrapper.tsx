"use client";

import { AdminProviders } from "../AdminProviders";
import AdminLoginPage from "./AdminLoginPage";

/**
 * Wraps the admin login page with admin-specific providers.
 *
 * Renders AdminLoginPage inside AdminProviders so the login page has access
 * to admin context, configuration, and related providers.
 *
 * @returns The JSX element tree: AdminProviders containing AdminLoginPage.
 */
export default function AdminLoginWrapper() {
  return (
    <AdminProviders>
      <AdminLoginPage />
    </AdminProviders>
  );
}
