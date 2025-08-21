import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

/**
 * Renders a centered 404 "Page Not Found" card.
 *
 * Displays a red alert icon, a prominent "404 Page Not Found" heading, and a muted descriptive message
 * inside a responsive card centered both vertically and horizontally.
 *
 * @returns A React element containing the 404 UI.
 */
export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-primary">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            The page you are looking for does not exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
