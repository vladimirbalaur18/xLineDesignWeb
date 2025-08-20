"use client";

import { AdminProviders } from "../AdminProviders";
import AdminLoginPage from "./AdminLoginPage";

export default function AdminLoginWrapper() {
  return (
    <AdminProviders>
      <AdminLoginPage />
    </AdminProviders>
  );
}
