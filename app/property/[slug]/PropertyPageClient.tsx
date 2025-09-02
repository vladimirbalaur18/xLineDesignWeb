"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import PropertyPageView from "@/components/PropertyPageView";
import { useProperty } from "@/hooks/use-property";

export default function PropertyPageClient({
  propertySlug,
}: {
  propertySlug: string;
}) {
  const { data: property, isLoading, error } = useProperty(propertySlug);

  const router = useRouter();
  const storyAutoOpen =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("story") === "true";

  // Loading state
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black flex items-center justify-center"
      >
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-white mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-white mb-2">
            Se încarcă proiectul...
          </h1>
          <p className="text-white/70">
            Vă rugăm să așteptați în timp ce încărcăm informațiile.
          </p>
        </div>
      </motion.div>
    );
  }

  // Error state
  if (error || !property) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            {property?.id === undefined
              ? "Proiect negăsit"
              : "Eroare la încărcare"}
          </h1>
          <p className="text-white/70 mb-6">
            {property?.id === undefined
              ? "Proiectul căutat nu există sau a fost șters."
              : error?.message ||
                "A apărut o eroare la încărcarea proiectului."}
          </p>
          <div className="space-x-4">
            <Button onClick={() => router.push("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la pagina principală
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="border-white/30 text-white hover:border-white/60"
            >
              Reîncarcă pagina
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <PropertyPageView
        property={property}
        onBack={() => router.back()}
        storyAutoOpen={storyAutoOpen}
      />
    </>
  );
}
