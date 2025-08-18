"use client";

import { useAuth } from "@/hooks/use-auth";
import AdminLogin from "@/components/AdminLogin";
import AdminPageClient from "./AdminPageClient";
import { properties } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export default function AdminAuthWrapper() {
  const { user, token, isLoading, login, logout } = useAuth();

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
    return <AdminLogin onLoginSuccess={login} />;
  }

  return (
    <div className="min-h-screen">
      {/* Admin Content */}
      <AdminPageClient initialProperties={properties} />
    </div>
  );
}
