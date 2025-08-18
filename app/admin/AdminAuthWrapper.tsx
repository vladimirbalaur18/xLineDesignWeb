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
      {/* Admin Header */}
      <header className=" border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold">Admin Panel</h1>
              <p className="text-sm text-gray-500">
                Logged in as {user.role} • Session started{" "}
                {new Date(user.loginTime).toLocaleTimeString()}
              </p>
            </div>
          </div>

          <Button
            onClick={logout}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      {/* Admin Content */}
      <AdminPageClient initialProperties={properties} />
    </div>
  );
}
