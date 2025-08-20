import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Property } from "@/lib/properties";

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
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}

export function useProperties() {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async (): Promise<Property[]> => {
      const response = await fetch("/api/properties");
      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useSaveProperty() {
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

export function useDeleteProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (propertyId: string): Promise<void> => {
      const response = await fetch(`/api/properties/${propertyId}`, {
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
