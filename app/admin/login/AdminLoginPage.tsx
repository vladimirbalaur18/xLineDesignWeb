"use client";

import AdminLogin from "@/components/AdminLogin";
import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side admin login page that renders the login UI or a loading state and redirects authenticated users.
 *
 * When authentication is complete (not loading and both `user` and `token` are present) the component redirects to `/admin`
 * using `router.replace` (replaces the current history entry). While `isLoading` is true it shows a centered loading spinner;
 * otherwise it renders `AdminLogin` and forwards the auth `login` callback via `onLoginSuccess`.
 *
 * @returns The component's JSX element.
 */
export default function AdminLoginPage() {
  const { user, token, login, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user && token) {
      router.replace("/admin");
    }
  }, [isLoading, user, token, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="">Loading...</p>
        </div>
      </div>
    );
  }

  return <AdminLogin onLoginSuccess={login} />;
}
