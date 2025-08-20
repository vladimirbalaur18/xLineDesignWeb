import { redirect } from "next/navigation";
import AdminPageWrapper from "./AdminPageWrapper";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const user = await verifyToken(token);

  if (!user) {
    redirect("/admin/login");
  }

  return <AdminPageWrapper />;
}
