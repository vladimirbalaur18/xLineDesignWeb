import { redirect } from "next/navigation";
import AdminPageWrapper from "./AdminPageWrapper";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

/**
 * Server-side admin page component that verifies the "admin-token" cookie and either renders the admin UI or redirects to the login page.
 *
 * This async server component checks for an "admin-token" cookie, validates it with `verifyToken`, and redirects to `/admin/login` if the token is missing or invalid. If validation succeeds, it returns the `AdminPageWrapper` component.
 *
 * @returns The admin UI (`AdminPageWrapper`) when authentication succeeds; otherwise the function redirects to `/admin/login`.
 */
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
