"use client";

import { AdminProviders } from "./AdminProviders";
import AdminAuthWrapper from "./AdminAuthWrapper";

export default function AdminPageWrapper() {
  return (
    <AdminProviders>
      <AdminAuthWrapper />
    </AdminProviders>
  );
}
