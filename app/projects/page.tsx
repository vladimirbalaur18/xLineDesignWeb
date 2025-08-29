import { redirect } from "next/navigation";

export default function ProjectsPage() {
  // Redirect to the default filter (all projects)
  redirect("/projects/all");
}
