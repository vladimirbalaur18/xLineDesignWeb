"use client";

import { useState, useEffect } from "react";
import { PropertyTable } from "@/components/PropertyTable";
import { PropertyForm } from "@/components/PropertyForm";
import type { Property } from "@/lib/properties";
import { useToast } from "@/hooks/use-toast";

export default function AdminPageClient() {
  const [propertiesList, setPropertiesList] = useState<Property[]>([]);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties");
        if (response.ok) {
          const data = await response.json();
          // The API returns the array directly, not wrapped in a properties object
          setPropertiesList(Array.isArray(data) ? data : []);
        } else {
          toast({
            title: "Eroare",
            description: "Nu s-au putut încărca proprietățile.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        toast({
          title: "Eroare",
          description: "A apărut o eroare la încărcarea proprietăților.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, [toast]);

  const handleEdit = (property: Property) => {
    console.log("Editing property:", property);
    setEditingProperty(property);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingProperty(null);
    setShowForm(true);
  };

  const handleDelete = async (slug: string) => {
    if (confirm("Are you sure you want to delete this property?")) {
      try {
        const response = await fetch(`/api/property/${slug}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setPropertiesList((prev) => prev.filter((p) => p.slug !== slug));
          toast({
            title: "Succes",
            description: "Proprietatea a fost ștearsă cu succes.",
          });
        } else {
          console.error("Failed to delete property");
          toast({
            title: "Eroare",
            description: "Nu s-a putut șterge proprietatea.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error deleting property:", error);
        toast({
          title: "Eroare",
          description: "A apărut o eroare la ștergerea proprietății.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSave = async (property: Property) => {
    try {
      console.log("Saving property:", property);
      if (editingProperty) {
        console.log("Updating existing property:", editingProperty.slug);
        // Update existing property
        const response = await fetch(`/api/property/${editingProperty.slug}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
        });

        if (response.ok) {
          const updatedProperty = await response.json();
          setPropertiesList((prev) =>
            prev.map((p) =>
              p.slug === editingProperty.slug ? updatedProperty : p
            )
          );
          toast({
            title: "Succes",
            description: "Proprietatea a fost actualizată cu succes.",
          });
        } else {
          console.error("Failed to update property");
          toast({
            title: "Eroare",
            description: "Nu s-a putut actualiza proprietatea.",
            variant: "destructive",
          });
          return;
        }
      } else {
        // Create new property
        const response = await fetch("/api/properties", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
        });

        if (response.ok) {
          const newProperty = await response.json();
          setPropertiesList((prev) => [...prev, newProperty]);
          toast({
            title: "Succes",
            description: "Proprietatea a fost creată cu succes.",
          });
        } else {
          console.error("Failed to create property");
          toast({
            title: "Eroare",
            description: "Nu s-a putut crea proprietatea.",
            variant: "destructive",
          });
          return;
        }
      }
      handleCancel();
    } catch (error) {
      console.error("Error saving property:", error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare la salvarea proprietății.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setEditingProperty(null);
    setShowForm(false);
  };

  if (isLoading) {
    return (
      <section
        id="admin"
        className="relative overflow-hidden py-16 container mx-auto px-4 pt-24"
      >
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="">Loading properties...</p>
        </div>
      </section>
    );
  }

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
