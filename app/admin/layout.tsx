import AdminHeader from "@/components/AdminHeader";
import { AuthProvider } from "@/hooks/use-auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminHeader />
      {children}
    </AuthProvider>
  );
}
