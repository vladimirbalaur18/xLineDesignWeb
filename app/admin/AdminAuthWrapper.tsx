"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import AdminPageClient from "./AdminPageClient";
import AdminHeader from "./AdminHeader";

/**
 * Client-side wrapper that enforces admin authentication before rendering admin UI.
 *
 * If authentication is still loading, displays a centered "Checking authentication..." loader.
 * Once loading finishes, if either `user` or `token` is missing it navigates to `/admin/login`
 * (using router.replace) and shows a "Redirecting to login..." message.
 * When both `user` and `token` are present it renders the admin layout (AdminHeader and AdminPageClient).
 */
export default function AdminAuthWrapper() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || !token)) {
      router.replace("/admin/login");
    }
  }, [isLoading, user, token, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!user || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AdminHeader />
      {/* Admin Content */}
      <AdminPageClient />
    </div>
  );
}
