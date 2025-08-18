"use client";

import { useState } from "react";
import { PropertyTable } from "@/components/PropertyTable";
import { PropertyForm } from "@/components/PropertyForm";
import { properties as initialProperties } from "@/lib/properties";
import type { Property } from "@/lib/properties";

export default function AdminPageClient({
  initialProperties,
}: {
  initialProperties: Property[];
}) {
  const [propertiesList, setPropertiesList] =
    useState<Property[]>(initialProperties);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingProperty(null);
    setShowForm(true);
  };

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this property?")) {
      setPropertiesList((prev) => prev.filter((p) => p.slug !== slug));
    }
  };

  const handleSave = (property: Property) => {
    if (editingProperty) {
      // Update existing property
      setPropertiesList((prev) =>
        prev.map((p) => (p.slug === editingProperty.slug ? property : p))
      );
    } else {
      // Add new property
      setPropertiesList((prev) => [...prev, property]);
    }
    handleCancel();
  };

  const handleCancel = () => {
    setEditingProperty(null);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <section
        id="admin"
        className="relative overflow-hidden py-16 container mx-auto px-4 pt-24"
      >
        <PropertyForm
          property={editingProperty || undefined}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </section>
    );
  }

  return (
    <section
      id="admin"
      className="relative overflow-hidden py-16 container mx-auto px-4 pt-24"
    >
      <PropertyTable
        properties={propertiesList}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCreate={handleCreate}
      />
    </section>
  );
}
