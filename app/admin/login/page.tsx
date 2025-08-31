import { redirect } from "next/navigation";
import AdminLogin from "./AdminLogin";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token");

  if (token && (await verifyToken(token.value))) {
    return redirect("/admin");
  }

  return <AdminLogin />;
}
