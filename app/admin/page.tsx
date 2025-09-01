import { cookies } from "next/headers";
import AdminPageClient from "./AdminPageClient";
import { isAdminAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("admin-token");

  if (!(await isAdminAuthenticated(token?.value))) {
    return redirect("/admin/login");
  }
  return <AdminPageClient />;
}
