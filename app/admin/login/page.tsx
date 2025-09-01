import { redirect } from "next/navigation";
import AdminLogin from "./AdminLoginClient";
import { cookies } from "next/headers";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token");

  if (await isAdminAuthenticated(token?.value)) {
    return redirect("/admin");
  }

  return <AdminLogin />;
}
