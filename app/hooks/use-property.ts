import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Property } from "@/lib/properties";

/**
 * Fetches a single Property by its slug using React Query.
 *
 * The query is enabled only when `slug` is provided. When executed, it requests
 * GET /api/property/{slug} and returns the parsed Property JSON.
 *
 * @param slug - The unique slug of the property to fetch. If omitted the query will be disabled.
 * @returns The React Query result for the requested `Property`.
 *
 * @remarks
 * If the query function runs with a missing `slug` it will throw an Error("Property slug is required").
 * The hook sets a staleTime of 10 minutes and a gcTime of 20 minutes for the cached result.
 */
export function useProperty(slug?: string) {
  return useQuery({
    queryKey: ["property", slug],
    queryFn: async (): Promise<Property> => {
      if (!slug) {
        throw new Error("Property slug is required");
      }
      const response = await fetch(`/api/property/${slug}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch property: ${response.statusText}`);
      }
      return response.json();
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes
  });
}

export const useProperties = ({
  includeSections = false,
}: {
  includeSections?: boolean;
}) =>
  useQuery({
    queryKey: ["properties"],
    queryFn: async (): Promise<Property[]> => {
      const response = await fetch(
        `/api/properties?includeSections=${includeSections}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes
  });

/**
 * Returns a React Query mutation for creating or updating a Property.
 *
 * The mutation sends the Property to /api/properties using POST for creates
 * (no `id`) or PUT for updates (has `id`). On success it invalidates the
 * cached ["property", savedProperty.slug] and ["properties"] queries so
 * callers see fresh data.
 *
 * The mutation function resolves to the saved Property parsed from the JSON
 * response. It throws an Error if the HTTP response is not ok.
 *
 * @returns A React Query mutation object whose `mutate` / `mutateAsync` accept a `Property` and resolve to the saved `Property`.
 */
export function useSavePropertyMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (property: Property): Promise<Property> => {
      const response = await fetch("/api/properties", {
        method: property.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      if (!response.ok) {
        throw new Error(`Failed to save property: ${response.statusText}`);
      }

      return response.json();
    },
    onSuccess: (savedProperty) => {
      // Invalidate and refetch the property data
      queryClient.invalidateQueries({
        queryKey: ["property", savedProperty.slug],
      });
      // Also invalidate the properties list if it exists
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}

/**
 * Returns a React Query mutation for deleting a Property by slug.
 *
 * The mutation sends a DELETE request to `/api/properties/{slug}` and,
 * on success, invalidates the cached ["properties"] query so lists are refreshed.
 *
 * The mutation's `mutate`/`mutateAsync` should be called with the property's slug.
 *
 * @returns A React Query mutation object for performing the delete operation.
 * @throws Error if the DELETE request responds with a non-OK status.
 */
export function useDeletePropertyMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string): Promise<void> => {
      const response = await fetch(`/api/properties/${slug}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete property: ${response.statusText}`);
      }
    },
    onSuccess: () => {
      // Invalidate the properties list
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}
