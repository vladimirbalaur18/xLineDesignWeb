import { useState } from "react";
import type { Property } from "@/lib/properties";

/**
 * React hook that manages creating and updating Property records via the app API.
 *
 * Provides helper functions to save a new property and update an existing one while
 * exposing simple loading and error state for use in forms.
 *
 * - saveProperty(property): POSTs `property` to `/api/properties`, returns the saved Property on success or `null` on failure.
 * - updateProperty(property): PUTs `property` to `/api/property/{slug}`, returns the updated Property on success or `null` on failure.
 *
 * Both operations:
 * - set `isLoading` to `true` while the request is in progress and reset it when finished,
 * - clear `error` before the request,
 * - if the response is not OK, attempt to parse a JSON `{ error }` message and store it in `error`,
 * - on any error store a fallback message in `error` and return `null`.
 *
 * @returns An object with:
 *  - `saveProperty`: (property: Property) => Promise<Property | null>
 *  - `updateProperty`: (property: Property) => Promise<Property | null>
 *  - `isLoading`: boolean
 *  - `error`: string | null
 */
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
