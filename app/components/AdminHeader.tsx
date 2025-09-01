"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { AuthStatusResponse } from "@shared/api/auth";
import { useOTPAuth } from "@/hooks/use-otp-auth";

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout, isAuthenticated } = useOTPAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <header className="fixed h-16 top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-2 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/logo.png" alt="Logo" width={150} height={55} />
        </div>

        {isAuthenticated && pathname === "/admin" && (
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
    </header>
  );
}
