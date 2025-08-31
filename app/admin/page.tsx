import AdminPageClient from "./AdminPageClient";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token");

  if (!token || !(await verifyToken(token.value))) {
    return redirect("/admin/login");
  }

  return <AdminPageClient />;
}
