import AdminHeader from "@/components/AdminHeader";
import { OTPAuthProvider } from "@/hooks/use-otp-auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OTPAuthProvider>
      <AdminHeader />
      {children}
    </OTPAuthProvider>
  );
}
