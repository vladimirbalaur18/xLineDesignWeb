import { useState } from "react";
import type { Property } from "@/types/properties";

export function usePropertyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveProperty = async (property: Property): Promise<Property | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save property");
      }

      const savedProperty = await response.json();
      return savedProperty;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProperty = async (
    property: Property
  ): Promise<Property | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/property/${property.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update property");
      }

      const updatedProperty = await response.json();
      return updatedProperty;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    saveProperty,
    updateProperty,
    isLoading,
    error,
  };
}
