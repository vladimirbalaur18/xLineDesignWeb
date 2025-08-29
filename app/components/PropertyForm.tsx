"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useProperty, useSavePropertyMutation } from "../hooks/use-property";
import type {
  Property,
  PropertyImage,
  PropertySection,
  PropertyStoryChapter,
} from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Eye, Loader2, Check } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Manual mapping of required fields based on the schema
const REQUIRED_FIELDS = new Set([
  "slug",
  "title",
  "category",
  "image",
  "heroImages",
]);

// Helper function to check if a field is required
const isFieldRequired = (
  schema: z.ZodObject<any>,
  fieldName: string
): boolean => {
  return REQUIRED_FIELDS.has(fieldName);
};

// Manual mapping of required nested fields
const REQUIRED_NESTED_FIELDS = new Map([
  ["storyChapters", new Set(["title", "narrative", "image", "duration"])],
  ["sections", new Set([])], // sections fields are optional
  ["heroImages", new Set(["url"])], // only url is required for hero images
]);

// Helper function to check if a nested field is required
const isNestedFieldRequired = (
  parentSchema: z.ZodObject<any>,
  parentFieldName: string,
  nestedFieldName: string
): boolean => {
  const requiredFields = REQUIRED_NESTED_FIELDS.get(parentFieldName);
  return requiredFields ? requiredFields.has(nestedFieldName) : false;
};

// Zod schema for validation
const propertyImageSchema = z.object({
  url: z.string().url("Must be a valid URL"),
  description: z.string().optional(),
});

const propertyStoryChapterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  narrative: z.string().min(1, "Narrative is required"),
  image: z.string().url("Must be a valid URL"),
  duration: z.number().min(1).max(60),
});

const propertySectionSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  images: z.array(z.string().url("Must be a valid URL")),
});

const propertyFormSchema = z.object({
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must contain only lowercase letters, numbers, and hyphens"
    ),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  fullDescription: z.string().optional(),
  address: z.string().optional(),
  price: z.string().optional(),
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  area: z.number().min(0).optional(),
  yearBuilt: z
    .number()
    .min(1800)
    .max(new Date().getFullYear() + 10)
    .optional(),
  features: z.array(z.string()).default([]),
  category: z.enum(["interiorDesign", "architecture", "landscapeDesign"]),
  location: z.string().min(1, "Locație este obligatorie"),

  image: z.string().url("Must be a valid URL"),
  tags: z.array(z.string()).default([]),
  heroImages: z
    .array(propertyImageSchema)
    .min(1, "At least one hero image is required"),
  galleryImages: z.array(propertyImageSchema).default([]),
  storyChapters: z.array(propertyStoryChapterSchema).default([]),
  sections: z.array(propertySectionSchema).default([]),
});

// Required field label component
const RequiredFieldLabel = ({
  children,
  fieldName,
  parentFieldName,
  nestedFieldName,
}: {
  children: React.ReactNode;
  fieldName?: string;
  parentFieldName?: string;
  nestedFieldName?: string;
}) => {
  let isRequired = false;

  if (parentFieldName && nestedFieldName) {
    isRequired = isNestedFieldRequired(
      propertyFormSchema as z.ZodObject<any>,
      parentFieldName,
      nestedFieldName
    );
  } else if (fieldName) {
    isRequired = isFieldRequired(
      propertyFormSchema as z.ZodObject<any>,
      fieldName
    );
  }

  return (
    <FormLabel>
      {children} {isRequired && <span className="text-red-500">*</span>}
    </FormLabel>
  );
};

type PropertyFormData = z.infer<typeof propertyFormSchema>;

interface PropertyFormProps {
  property?: Property;
  onSave: (property: Property, deletions: string[]) => void;
  onCancel: () => void;
}

export function PropertyForm({
  property,
  onSave,
  onCancel,
}: PropertyFormProps) {
  const [modalImage, setModalImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);
  const [newFeature, setNewFeature] = useState("");
  const [newTag, setNewTag] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [activeUploads, setActiveUploads] = useState(0);
  const [pendingDeleteUrls, setPendingDeleteUrls] = useState<Set<string>>(
    new Set()
  );
  const { toast } = useToast();

  // Use React Query to fetch property data
  const {
    data: fetchedProperty,
    isLoading: isLoadingProperty,
    error,
  } = useProperty(property?.slug || undefined);

  // Use React Query mutation for saving
  const savePropertyMutation = useSavePropertyMutation();

  // Handle React Query error
  useEffect(() => {
    if (error) {
      console.error("Error fetching property data:", error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare la încărcarea proprietății.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  // Initialize form with default values or existing property data
  const defaultValues: PropertyFormData = property
    ? {
        slug: property.slug,
        title: property.title,
        description: property.description || "",
        fullDescription: property.fullDescription || "",
        address: property.address || "",
        price: property.price || "",
        bedrooms: property.bedrooms || 0,
        bathrooms: property.bathrooms || 0,
        area: property.area || 0,
        yearBuilt: property.yearBuilt || new Date().getFullYear(),
        features: property.features || [],
        category: property.category,
        location: property.location || "",
        image: property.image,
        tags: property.tags || [],
        heroImages:
          property.heroImages?.map((img) => ({
            ...img,
            description: img.description || `Hero Image - ${property.title}`,
          })) || [],
        galleryImages:
          property.galleryImages?.map((img) => ({
            ...img,
            description: img.description || undefined,
          })) || [],
        storyChapters:
          property.storyChapters?.map((chapter) => ({
            ...chapter,
          })) || [],
        sections: property.sections || [],
      }
    : {
        slug: "",
        title: "",
        description: "",
        fullDescription: "",
        address: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        yearBuilt: new Date().getFullYear(),
        features: [],
        category: "interiorDesign",
        location: "",
        image: "",
        tags: [],
        heroImages: [],
        galleryImages: [],
        storyChapters: [],
        sections: [],
      };

  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues,
    mode: "all", // Show errors immediately for all fields
  });

  // Reset form when property data changes
  useEffect(() => {
    if (fetchedProperty) {
      console.log("Resetting form with fetched data:", fetchedProperty);
      const formData = {
        slug: fetchedProperty.slug,
        title: fetchedProperty.title,
        description: fetchedProperty.description || "",
        fullDescription: fetchedProperty.fullDescription || "",
        address: fetchedProperty.address || "",
        price: fetchedProperty.price || "",
        bedrooms: fetchedProperty.bedrooms || 0,
        bathrooms: fetchedProperty.bathrooms || 0,
        area: fetchedProperty.area || 0,
        yearBuilt: fetchedProperty.yearBuilt || new Date().getFullYear(),
        features: fetchedProperty.features || [],
        category: fetchedProperty.category,
        location: fetchedProperty.location || "",
        image: fetchedProperty.image,
        tags: fetchedProperty.tags || [],
        heroImages:
          fetchedProperty.heroImages?.map((img) => ({
            ...img,
            description: img.description || undefined,
          })) || [],
        galleryImages:
          fetchedProperty.galleryImages?.map((img) => ({
            ...img,
            description: img.description || undefined,
          })) || [],
        storyChapters: fetchedProperty.storyChapters || [],
        sections:
          fetchedProperty.sections?.map((section) => ({
            title: section.title || "",
            content: section.content || "",
            images: section.images || [],
          })) || [],
      };
      form.reset(formData);
    }
  }, [fetchedProperty, form]);

  // Function to show all validation errors immediately
  const showAllErrors = async () => {
    try {
      await form.trigger();
      setShowErrors(true);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  // Show errors immediately when form loads
  useEffect(() => {
    const timer = setTimeout(showAllErrors, 100);
    return () => clearTimeout(timer);
  }, []);

  // Field arrays for dynamic content

  const {
    fields: heroImageFields,
    append: appendHeroImage,
    remove: removeHeroImage,
  } = useFieldArray({
    control: form.control,
    name: "heroImages",
    keyName: "fieldId",
  });

  const {
    fields: storyChapterFields,
    append: appendStoryChapter,
    remove: removeStoryChapter,
  } = useFieldArray({
    control: form.control,
    name: "storyChapters",
    keyName: "fieldId",
  });

  const {
    fields: sectionFields,
    append: appendSection,
    remove: removeSection,
  } = useFieldArray({
    control: form.control,
    name: "sections",
    keyName: "fieldId",
  });

  const onSubmit = async (data: PropertyFormData) => {
    console.log("Form data:", data);
    console.log("Form errors:", form.formState.errors);
    console.log("Form is valid:", form.formState.isValid);

    // Prevent double submission
    if (savePropertyMutation.isPending) {
      console.log("Form submission already in progress, skipping...");
      return;
    }

    // Block submission if any image is still a local blob URL or uploads in progress
    const hasBlobUrls = () => {
      if (typeof data.image === "string" && data.image.startsWith("blob:"))
        return true;
      if (
        Array.isArray(data.heroImages) &&
        data.heroImages.some((img) => img?.url?.startsWith?.("blob:"))
      )
        return true;
      if (
        Array.isArray(data.galleryImages) &&
        data.galleryImages.some((img) => img?.url?.startsWith?.("blob:"))
      )
        return true;
      if (
        Array.isArray(data.storyChapters) &&
        data.storyChapters.some((ch) => ch?.image?.startsWith?.("blob:"))
      )
        return true;
      if (
        Array.isArray(data.sections) &&
        data.sections.some(
          (sec) =>
            Array.isArray(sec?.images) &&
            sec.images.some((u) => u?.startsWith?.("blob:"))
        )
      )
        return true;
      return false;
    };

    if (activeUploads > 0 || hasBlobUrls()) {
      toast({
        title: "Încărcare în curs",
        description:
          "Așteaptă finalizarea încărcării tuturor imaginilor înainte de salvare.",
        variant: "destructive",
      });
      return;
    }

    // Additional validation for hero images
    if (!data.heroImages || data.heroImages.length === 0) {
      toast({
        title: "Eroare de validare",
        description: "Cel puțin o imagine hero este obligatorie.",
        variant: "destructive",
      });
      return;
    }

    // Transform the form data to match the Property interface
    const transformedProperty: Property = {
      slug: data.slug,
      title: data.title,
      description: data.description,
      fullDescription: data.fullDescription,
      address: data.address,
      price: data.price,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      area: data.area,
      yearBuilt: data.yearBuilt,
      features: data.features,
      category: data.category,
      location: data.location,

      image: data.image,
      tags: data.tags,
      heroImages: data.heroImages,
      galleryImages: data.galleryImages,
      storyChapters: data.storyChapters.map((chapter) => ({
        ...chapter,
      })),
      sections: data.sections.map((section) => ({
        ...section,
        title: section.title || "",
        content: section.content || "",
        images: section.images || [],
      })),
      id: fetchedProperty?.id || property?.id,
      createdAt: fetchedProperty?.createdAt || property?.createdAt,
      updatedAt: fetchedProperty?.updatedAt || property?.updatedAt,
    };

    onSave(transformedProperty, Array.from(pendingDeleteUrls));
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);

    const errorMessages = Object.values(errors)
      .map((error: any) => error?.message)
      .filter(Boolean)
      .join(", ");

    toast({
      title: "Eroare de validare",
      description: errorMessages || "Formularul conține erori de validare.",
      variant: "destructive",
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      const currentFeatures = form.watch("features") || [];
      form.setValue("features", [...currentFeatures, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      const currentTags = form.watch("tags") || [];
      form.setValue("tags", [...currentTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const ImagePreview = ({
    url,
    alt,
    className = "",
  }: {
    url: string;
    alt: string;
    className?: string;
  }) => {
    // Check if URL is valid (not empty and is a valid URL)
    if (!url || url.trim() === "" || !isValidUrl(url)) return null;

    return (
      <div
        className={`relative overflow-hidden rounded-lg bg-muted cursor-pointer ${className}`}
        onClick={() => setModalImage({ url, alt })}
      >
        <OptimizedImage
          src={url}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <Eye className="h-6 w-6 text-white" />
        </div>
      </div>
    );
  };

  // Helper function to validate URLs
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isVercelBlobUrl = (url: string): boolean => {
    if (!isValidUrl(url)) return false;
    try {
      const { host } = new URL(url);
      return host.includes(".public.blob.vercel-storage.com");
    } catch {
      return false;
    }
  };

  // Reusable input that supports URL or file upload and writes a URL string
  const ImageUrlOrUpload = ({
    value,
    onChange,
    placeholder,
    disabled,
    inputId,
    dir,
    onUploadingChange,
  }: {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    disabled?: boolean;
    inputId?: string;
    dir?: string;
    onUploadingChange?: (uploading: boolean) => void;
  }) => {
    const objectUrlRef = useRef<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [tab, setTab] = useState<"url" | "upload">("upload");
    const uploadedToVercel = value ? isVercelBlobUrl(value) : false;
    const isLocalBlob = typeof value === "string" && value.startsWith("blob:");
    const showUrlTab = !uploadedToVercel && !isLocalBlob;
    const isEmpty = !value || value.trim() === "";

    useEffect(() => {
      return () => {
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
        }
      };
    }, []);

    // no tab management

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      // queue deletion of previous remote image if replacing
      if (value && isVercelBlobUrl(value)) {
        setPendingDeleteUrls((prev) => {
          const next = new Set(prev);
          next.add(value);
          return next;
        });
      }
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
      const blobUrl = URL.createObjectURL(file);
      objectUrlRef.current = blobUrl;
      onChange(blobUrl);

      // Toast: show loading state during upload
      const progressToast = toast({
        title: "Încărcare imagine",
        description: "Se încarcă fișierul...",
      });

      try {
        setIsUploading(true);
        onUploadingChange?.(true);
        const formData = new FormData();
        formData.append("file", file);
        if (dir) formData.append("dir", dir);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          throw new Error("Upload failed");
        }
        const json = (await res.json()) as { url?: string };
        if (json?.url) {
          onChange(json.url);
          if (objectUrlRef.current) {
            URL.revokeObjectURL(objectUrlRef.current);
            objectUrlRef.current = null;
          }
        } else {
          throw new Error("Invalid upload response");
        }
      } catch (err) {
        toast({
          title: "Eroare la încărcare",
          description: "Nu s-a putut încărca imaginea. Încearcă din nou.",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
        onUploadingChange?.(false);
        progressToast.dismiss();
      }
    };

    // When empty: show tabs to let user choose URL or Upload
    if (isEmpty) {
      return (
        <div className="space-y-2">
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as "url" | "upload")}
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="url">URL</TabsTrigger>
              <TabsTrigger value="upload">Încarcă</TabsTrigger>
            </TabsList>
            <TabsContent value="url" className="mt-2">
              <Input
                id={inputId}
                placeholder={placeholder || "https://exemplu.ro/imagine.jpg"}
                value={value || ""}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
              />
            </TabsContent>
            <TabsContent value="upload" className="mt-2">
              <div className="flex items-center gap-2">
                <input
                  id={inputId ? `${inputId}-file` : undefined}
                  type="file"
                  accept="image/*"
                  disabled={disabled || isUploading}
                  onChange={handleFileChange}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
                {isUploading && (
                  <span className="inline-flex items-center text-sm text-muted-foreground">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Încărcare...
                  </span>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      );
    }

    // Otherwise: keep simplified UI (hide URL when uploaded blob; show URL input if non-blob URL)
    return (
      <div className="space-y-2">
        {showUrlTab && (
          <div className="mt-2">
            <Input
              id={inputId}
              placeholder={placeholder || "https://exemplu.ro/imagine.jpg"}
              value={value || ""}
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        )}
        <div className="mt-2 flex items-center gap-2">
          <input
            id={inputId ? `${inputId}-file` : undefined}
            type="file"
            accept="image/*"
            disabled={disabled || isUploading}
            onChange={handleFileChange}
            className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />
          {isUploading ? (
            <span className="inline-flex items-center text-sm text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Încărcare...
            </span>
          ) : value && isVercelBlobUrl(value) ? (
            <span className="inline-flex items-center text-sm text-emerald-600">
              <Check className="mr-1 h-4 w-4" /> Încărcat
            </span>
          ) : null}
          {value && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={isUploading}
              onClick={async () => {
                try {
                  if (value.startsWith("blob:")) {
                    if (objectUrlRef.current) {
                      URL.revokeObjectURL(objectUrlRef.current);
                      objectUrlRef.current = null;
                    }
                  } else if (isVercelBlobUrl(value)) {
                    setPendingDeleteUrls((prev) => {
                      const next = new Set(prev);
                      next.add(value);
                      return next;
                    });
                  }
                } catch (err) {
                } finally {
                  onChange("");
                }
              }}
            >
              Șterge
            </Button>
          )}
        </div>
      </div>
    );
  };

  // Show loading state while fetching property data
  if (isLoadingProperty && property?.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto"></div>
          <p className="text-gray-300">Se încarcă datele proprietății...</p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-playfair font-bold">
            {fetchedProperty || property
              ? "Editează Proprietatea"
              : "Creează Proprietatea Nouă"}
          </h2>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Anulează
            </Button>
            <Button
              type="submit"
              disabled={
                form.formState.isSubmitting ||
                savePropertyMutation.isPending ||
                activeUploads > 0
              }
            >
              {form.formState.isSubmitting ||
              savePropertyMutation.isPending ||
              activeUploads > 0
                ? "Salvând..."
                : fetchedProperty || property
                ? "Actualizează"
                : "Creează"}{" "}
              Proprietatea
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4 flex items-center justify-between">
          <span>
            <span className="text-red-500">*</span> Câmpuri obligatorii
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={showAllErrors}
          >
            Arată toate erorile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informații de Bază</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="title">
                      Titlu
                    </RequiredFieldLabel>
                    <FormControl>
                      <Input placeholder="Titlul proprietății" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="slug">
                      Slug
                    </RequiredFieldLabel>
                    <FormControl>
                      <Input placeholder="slug-proprietate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="description">
                      Descriere
                    </RequiredFieldLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descriere scurtă"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullDescription"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="fullDescription">
                      Descriere Completă
                    </RequiredFieldLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descriere detaliată"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="category">
                      Categorie
                    </RequiredFieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="interiorDesign">
                          Design Interior
                        </SelectItem>
                        <SelectItem value="architecture">
                          Arhitectură
                        </SelectItem>
                        <SelectItem value="landscapeDesign">
                          Design Peisagistic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>Detalii Proprietate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="address">
                      Adresă
                    </RequiredFieldLabel>
                    <FormControl>
                      <Input placeholder="Adresa proprietății" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="location">
                      Locație
                    </RequiredFieldLabel>
                    <FormControl>
                      <Input placeholder="Oraș, Județ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="price">
                      Preț
                    </RequiredFieldLabel>
                    <FormControl>
                      <Input placeholder="€500,000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel fieldName="bedrooms">
                        Dormitoare
                      </RequiredFieldLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value) || 0)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel fieldName="bathrooms">
                        Băi
                      </RequiredFieldLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value) || 0)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel fieldName="area">
                        Suprafață (mp)
                      </RequiredFieldLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearBuilt"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel fieldName="yearBuilt">
                        Anul Construcției
                      </RequiredFieldLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseInt(e.target.value) ||
                                new Date().getFullYear()
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Image */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Imaginea Principală</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <RequiredFieldLabel fieldName="image">
                      Imagine
                    </RequiredFieldLabel>
                    <FormControl>
                      <ImageUrlOrUpload
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="https://example.com/image.jpg"
                        inputId={field.name}
                        dir={`properties/${form.watch("slug") || "new"}/main`}
                        onUploadingChange={(u) =>
                          setActiveUploads((c) => c + (u ? 1 : -1))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("image") &&
                form.watch("image").trim() !== "" &&
                isValidUrl(form.watch("image")) && (
                  <div className="mt-4">
                    <Label>Previzualizare</Label>
                    <ImagePreview
                      url={form.watch("image")}
                      alt={form.watch("title")}
                      className="w-128 h-128"
                    />
                  </div>
                )}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 flex-1">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Caracteristici</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Adaugă o caracteristică"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddFeature();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddFeature}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.watch("features").map((feature, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      {feature}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 hover:bg-transparent"
                        onClick={() => {
                          const currentFeatures = form.watch("features") || [];
                          const updatedFeatures = currentFeatures.filter(
                            (_, i) => i !== index
                          );
                          form.setValue("features", updatedFeatures);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Etichete</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Adaugă o etichetă"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.watch("tags").map((tag, index) => (
                    <Badge key={index} variant="outline" className="gap-1">
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 hover:bg-transparent"
                        onClick={() => {
                          const currentTags = form.watch("tags") || [];
                          const updatedTags = currentTags.filter(
                            (_, i) => i !== index
                          );
                          form.setValue("tags", updatedTags);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hero Images */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Imagini Hero{" "}
              {isFieldRequired(
                propertyFormSchema as z.ZodObject<any>,
                "heroImages"
              ) && <span className="text-red-500">*</span>}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {heroImageFields.map((field, index) => (
              <div
                key={field.fieldId}
                className="flex gap-4 items-start p-4 border rounded-lg"
              >
                <div className="flex-1 space-y-2">
                  <FormField
                    control={form.control}
                    name={`heroImages.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
                        <RequiredFieldLabel
                          parentFieldName="heroImages"
                          nestedFieldName="url"
                        >
                          Imagine
                        </RequiredFieldLabel>
                        <FormControl>
                          <ImageUrlOrUpload
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="URL Imagine"
                            inputId={field.name}
                            dir={`properties/${
                              form.watch("slug") || "new"
                            }/hero`}
                            onUploadingChange={(u) =>
                              setActiveUploads((c) => c + (u ? 1 : -1))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {form.watch(`heroImages.${index}.url`) &&
                  form.watch(`heroImages.${index}.url`).trim() !== "" &&
                  isValidUrl(form.watch(`heroImages.${index}.url`)) && (
                    <ImagePreview
                      url={form.watch(`heroImages.${index}.url`)}
                      alt={
                        form.watch(`heroImages.${index}.description`) ||
                        `Hero image ${index + 1}`
                      }
                      className="w-32 h-24 flex-shrink-0"
                    />
                  )}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    const url = form.getValues(`heroImages.${index}.url`);
                    if (url && isVercelBlobUrl(url)) {
                      setPendingDeleteUrls((prev) => {
                        const next = new Set(prev);
                        next.add(url);
                        return next;
                      });
                    }
                    removeHeroImage(index);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={() =>
                appendHeroImage({
                  url: "",
                  description: "",
                })
              }
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Imagine
            </Button>
          </CardFooter>
        </Card>

        {/* Story Chapters Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Slide-uri
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {storyChapterFields.map((field, chapterIndex) => (
              <div
                key={field.fieldId}
                className="border rounded-lg p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Capitolul {chapterIndex + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={async () => {
                      const url = form.getValues(
                        `storyChapters.${chapterIndex}.image`
                      );
                      if (url && isVercelBlobUrl(url)) {
                        setPendingDeleteUrls((prev) => {
                          const next = new Set(prev);
                          next.add(url);
                          return next;
                        });
                      }
                      removeStoryChapter(chapterIndex);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1  gap-4">
                  <FormField
                    control={form.control}
                    name={`storyChapters.${chapterIndex}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <RequiredFieldLabel
                          parentFieldName="storyChapters"
                          nestedFieldName="title"
                        >
                          Titlul Capitolului
                        </RequiredFieldLabel>
                        <FormControl>
                          <Input placeholder="Titlul capitolului" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`storyChapters.${chapterIndex}.image`}
                    render={({ field }) => (
                      <FormItem>
                        <RequiredFieldLabel
                          parentFieldName="storyChapters"
                          nestedFieldName="image"
                        >
                          Imaginea Capitolului
                        </RequiredFieldLabel>
                        <FormControl>
                          <ImageUrlOrUpload
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="URL Imagine"
                            inputId={field.name}
                            dir={`properties/${
                              form.watch("slug") || "new"
                            }/chapters`}
                            onUploadingChange={(u) =>
                              setActiveUploads((c) => c + (u ? 1 : -1))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`storyChapters.${chapterIndex}.narrative`}
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel
                        parentFieldName="storyChapters"
                        nestedFieldName="narrative"
                      >
                        Narațiune
                      </RequiredFieldLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Textul narațiunii capitolului"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`storyChapters.${chapterIndex}.duration`}
                    render={({ field }) => (
                      <FormItem>
                        <RequiredFieldLabel
                          parentFieldName="storyChapters"
                          nestedFieldName="duration"
                        >
                          Durata (secunde)
                        </RequiredFieldLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Durata în secunde"
                            min="1"
                            max="60"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Image Preview */}
                {form.watch(`storyChapters.${chapterIndex}.image`) &&
                  form.watch(`storyChapters.${chapterIndex}.image`).trim() !==
                    "" &&
                  isValidUrl(
                    form.watch(`storyChapters.${chapterIndex}.image`)
                  ) && (
                    <div>
                      <Label>Previzualizare</Label>
                      <div
                        className="relative w-full h-56 bg-muted rounded-md overflow-hidden cursor-pointer"
                        onClick={() =>
                          setModalImage({
                            url: form.watch(
                              `storyChapters.${chapterIndex}.image`
                            ),
                            alt:
                              form.watch(
                                `storyChapters.${chapterIndex}.title`
                              ) || `Chapter ${chapterIndex + 1}`,
                          })
                        }
                      >
                        <OptimizedImage
                          src={form.watch(
                            `storyChapters.${chapterIndex}.image`
                          )}
                          alt={
                            form.watch(`storyChapters.${chapterIndex}.title`) ||
                            `Chapter ${chapterIndex + 1}`
                          }
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ))}

            {storyChapterFields.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Nu au fost adăugate capitole încă. Apăsați "Adaugă Capitol"
                pentru a crea primul capitol.
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="button"
              className="w-full"
              variant="outline"
              onClick={() =>
                appendStoryChapter({
                  title: "",
                  narrative: "",
                  image: "",
                  duration: 5,
                })
              }
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Capitol
            </Button>
          </CardFooter>
        </Card>

        {/* Sections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Secțiuni de imagini
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {sectionFields.map((field, sectionIndex) => (
              <div
                key={field.fieldId}
                className="border rounded-lg p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Secțiunea {sectionIndex + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSection(sectionIndex)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name={`sections.${sectionIndex}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <RequiredFieldLabel
                          parentFieldName="sections"
                          nestedFieldName="title"
                        >
                          Titlul Secțiunii (opțional)
                        </RequiredFieldLabel>
                        <FormControl>
                          <Input
                            placeholder="Titlul secțiunii (opțional)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`sections.${sectionIndex}.content`}
                  render={({ field }) => (
                    <FormItem>
                      <RequiredFieldLabel
                        parentFieldName="sections"
                        nestedFieldName="content"
                      >
                        Conținutul Secțiunii (opțional)
                      </RequiredFieldLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conținutul detaliat al secțiunii (opțional)"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Imaginile Secțiunii</Label>
                  </div>

                  {(form.watch(`sections.${sectionIndex}.images`) || []).map(
                    (imageUrl, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="flex gap-4 items-start p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex-1 space-y-2">
                          <ImageUrlOrUpload
                            value={imageUrl}
                            onChange={(val) => {
                              const currentImages =
                                form.watch(`sections.${sectionIndex}.images`) ||
                                [];
                              const updatedImages = [...currentImages];
                              updatedImages[imageIndex] = val;
                              form.setValue(
                                `sections.${sectionIndex}.images`,
                                updatedImages
                              );
                            }}
                            placeholder="URL Imagine"
                            inputId={`sections.${sectionIndex}.images.${imageIndex}`}
                            dir={`properties/${
                              form.watch("slug") || "new"
                            }/sections/${sectionIndex}`}
                            onUploadingChange={(u) =>
                              setActiveUploads((c) => c + (u ? 1 : -1))
                            }
                          />
                        </div>
                        {imageUrl &&
                          imageUrl.trim() !== "" &&
                          isValidUrl(imageUrl) && (
                            <ImagePreview
                              url={imageUrl}
                              alt={`Section ${sectionIndex + 1} image ${
                                imageIndex + 1
                              }`}
                              className="w-28 h-20 flex-shrink-0"
                            />
                          )}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={async () => {
                            const url = form.getValues(
                              `sections.${sectionIndex}.images.${imageIndex}`
                            );
                            if (url && isVercelBlobUrl(url)) {
                              setPendingDeleteUrls((prev) => {
                                const next = new Set(prev);
                                next.add(url);
                                return next;
                              });
                            }
                            const currentImages =
                              form.watch(`sections.${sectionIndex}.images`) ||
                              [];
                            const updatedImages = currentImages.filter(
                              (_, i) => i !== imageIndex
                            );
                            form.setValue(
                              `sections.${sectionIndex}.images`,
                              updatedImages
                            );
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )
                  )}
                  <Button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      const currentImages =
                        form.watch(`sections.${sectionIndex}.images`) || [];
                      form.setValue(`sections.${sectionIndex}.images`, [
                        ...currentImages,
                        "",
                      ]);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adaugă Imagine
                  </Button>
                </div>
              </div>
            ))}

            {sectionFields.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Nu au fost adăugate secțiuni încă. Apăsați "Adaugă Secțiune"
                pentru a crea prima secțiune.
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() =>
                appendSection({
                  title: "",
                  content: "",
                  images: [],
                })
              }
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Secțiune
            </Button>
          </CardFooter>
        </Card>

        {/* Image Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] p-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute -top-2 -right-2 bg-white/90 text-black rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalImage(null);
                }}
              >
                <X className="h-5 w-5" />
              </Button>
              <OptimizedImage
                src={modalImage.url}
                alt={modalImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-2 text-center text-white text-sm bg-black/50 rounded px-2 py-1">
                {modalImage.alt}
              </div>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}
