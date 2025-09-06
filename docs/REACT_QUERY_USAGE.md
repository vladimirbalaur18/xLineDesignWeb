# React Query Usage Guide

This project uses React Query (TanStack Query) for efficient data fetching, caching, and state management. Here's how to use it effectively.

## Setup

React Query is already configured in the project with the following setup:

- **Query Client**: Located in `app/lib/queryClient.ts`
- **Provider**: Wrapped around the app in `app/providers.tsx`
- **Default Options**: Optimized for server-side rendering and caching

## Available Hooks

### 1. `useProperty(slug?: string)`

Fetches a single property by its slug.

```typescript
import { useProperty } from "@/hooks/use-property";

function PropertyPage({ slug }: { slug: string }) {
  const { data: property, isLoading, error } = useProperty(slug);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!property) return <div>Property not found</div>;

  return <div>{property.title}</div>;
}
```

### 2. `useProperties()`

Fetches all properties.

```typescript
import { useProperties } from "@/hooks/use-property";

function PropertyList() {
  const { data: properties, isLoading, error } = useProperties();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {properties?.map((property) => (
        <div key={property.id}>{property.title}</div>
      ))}
    </div>
  );
}
```

### 3. `useSaveProperty()`

Mutation hook for creating or updating properties.

```typescript
import { useSaveProperty } from "@/hooks/use-property";

function PropertyForm({ property }: { property?: Property }) {
  const savePropertyMutation = useSaveProperty();

  const handleSubmit = async (formData: PropertyFormData) => {
    try {
      const savedProperty = await savePropertyMutation.mutateAsync(formData);
      console.log("Property saved:", savedProperty);
    } catch (error) {
      console.error("Error saving property:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={savePropertyMutation.isPending}>
        {savePropertyMutation.isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
```

### 4. `useDeleteProperty()`

Mutation hook for deleting properties.

```typescript
import { useDeleteProperty } from "@/hooks/use-property";

function PropertyCard({ property }: { property: Property }) {
  const deletePropertyMutation = useDeleteProperty();

  const handleDelete = async () => {
    try {
      await deletePropertyMutation.mutateAsync(property.id!);
      console.log("Property deleted");
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div>
      <h3>{property.title}</h3>
      <button
        onClick={handleDelete}
        disabled={deletePropertyMutation.isPending}
      >
        {deletePropertyMutation.isPending ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
```

## Key Features

### Automatic Caching

- Data is cached for 5 minutes (`staleTime`)
- Cache is garbage collected after 10 minutes (`gcTime`)
- Automatic background refetching when data becomes stale

### Optimistic Updates

The mutation hooks automatically invalidate related queries, ensuring the UI stays in sync:

```typescript
// When a property is saved, these queries are invalidated:
queryClient.invalidateQueries({ queryKey: ["property", savedProperty.slug] });
queryClient.invalidateQueries({ queryKey: ["properties"] });
```

### Error Handling

All hooks provide error states that you can handle in your components:

```typescript
const { data, isLoading, error } = useProperty(slug);

if (error) {
  // Handle error (show toast, fallback UI, etc.)
  return <ErrorComponent error={error} />;
}
```

### Loading States

Each hook provides loading states for better UX:

```typescript
const { data, isLoading } = useProperty(slug);
const saveMutation = useSaveProperty();

if (isLoading) return <LoadingSpinner />;
if (saveMutation.isPending) return <SavingSpinner />;
```

## Best Practices

### 1. Use Query Keys Consistently

```typescript
// Good - consistent query keys
["property", slug]["properties"][
  ("properties", { category: "interiorDesign" })
];
```

### 2. Handle Loading and Error States

Always provide loading and error states for better user experience.

### 3. Use Mutations for Data Changes

Use mutation hooks for create, update, and delete operations instead of manual fetch calls.

### 4. Leverage Automatic Invalidation

The mutation hooks automatically invalidate related queries, keeping your UI in sync.

### 5. Optimize for SSR

The query client is configured with `staleTime: Infinity` to work well with server-side rendering.

## Example: Complete Property Management

Here's a complete example of how to use React Query for property management:

```typescript
"use client";

import {
  useProperties,
  useSaveProperty,
  useDeleteProperty,
} from "@/hooks/use-property";
import { useToast } from "@/hooks/use-toast";

function PropertyManager() {
  const { data: properties, isLoading, error } = useProperties();
  const saveProperty = useSaveProperty();
  const deleteProperty = useDeleteProperty();
  const { toast } = useToast();

  const handleSave = async (propertyData: Property) => {
    try {
      await saveProperty.mutateAsync(propertyData);
      toast({
        title: "Success",
        description: "Property saved successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save property",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (propertyId: string) => {
    try {
      await deleteProperty.mutateAsync(propertyId);
      toast({
        title: "Success",
        description: "Property deleted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <div>Loading properties...</div>;
  if (error) return <div>Error loading properties</div>;

  return (
    <div>
      {properties?.map((property) => (
        <div key={property.id}>
          <h3>{property.title}</h3>
          <button onClick={() => handleDelete(property.id!)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

This setup provides a robust, performant, and user-friendly data fetching solution for your property management application.
