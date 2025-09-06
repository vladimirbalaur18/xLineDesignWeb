"use client";

import { useState } from "react";
import { PropertyTable } from "@/components/PropertyTable";
import { PropertyForm } from "@/components/PropertyForm";
import type { Property } from "@/types/properties";
import { useToast } from "@/hooks/use-toast";
import {
  useDeletePropertyMutation,
  useProperties,
  useSavePropertyMutation,
} from "@/hooks/use-property";
import AdminHeader from "@/components/AdminHeader";

export default function AdminPageClient() {
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const {
    data: propertiesList = [],
    isLoading,
    error,
  } = useProperties({
    includeSections: true,
  });

  const { mutate: deleteProperty } = useDeletePropertyMutation();
  const { mutate: saveProperty } = useSavePropertyMutation();

  if (error) {
    toast({
      title: "Eroare",
      description: "A apărut o eroare la încărcarea proprietăților.",
      variant: "destructive",
    });
    console.error("Failed to fetch properties:", error);
  }

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
      deleteProperty(slug, {
        onSuccess: () => {
          toast({
            title: "Succes",
            description: "Proprietatea a fost ștearsă cu succes.",
          });
        },
        onError: () => {
          toast({
            title: "Eroare",
            description: "Nu s-a putut șterge proprietatea.",
            variant: "destructive",
          });
        },
      });
    }
  };

  const handleSave = async (property: Property, deletions: string[] = []) => {
    const isEditing = !!editingProperty;

    saveProperty(property, {
      onSuccess: async () => {
        // After successful save, delete queued blobs (best-effort)
        if (deletions.length > 0) {
          try {
            await fetch("/api/upload", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ urls: deletions }),
            });
          } catch (err) {
            // swallow
          }
        }
        toast({
          title: "Succes",
          description: `Proprietatea a fost ${
            isEditing ? "actualizată" : "adăugată"
          } cu succes.`,
        });
      },
      onError: () => {
        toast({
          title: "Eroare",
          description: `Nu s-a putut ${
            isEditing ? "actualiza" : "adăuga"
          } proprietatea.`,
          variant: "destructive",
        });
      },
    });
    handleCancel();
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

  return (
    <>
      <section
        id="admin"
        className="relative overflow-hidden py-16 container mx-auto px-4 pt-24"
      >
        {showForm ? (
          <PropertyForm
            property={editingProperty || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <PropertyTable
            properties={propertiesList}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onCreate={handleCreate}
          />
        )}
      </section>
    </>
  );
}
