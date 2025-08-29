import { QueryClientProvider } from "@tanstack/react-query";
import AdminHeader from "../components/AdminHeader";
import { queryClient } from "@/lib/queryClient";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminHeader />
      {children}
    </QueryClientProvider>
  );
}
