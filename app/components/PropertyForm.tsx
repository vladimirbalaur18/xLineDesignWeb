"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useProperty, useSaveProperty } from "../hooks/use-property";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Eye } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
  location: z.string().optional(),

  image: z.string().url("Must be a valid URL"),
  tags: z.array(z.string()).default([]),
  heroImages: z
    .array(propertyImageSchema)
    .min(1, "At least one hero image is required"),
  galleryImages: z.array(propertyImageSchema).default([]),
  storyChapters: z.array(propertyStoryChapterSchema).default([]),
  sections: z.array(propertySectionSchema).default([]),
});

type PropertyFormData = z.infer<typeof propertyFormSchema>;

interface PropertyFormProps {
  property?: Property;
  onSave: (property: Property) => void;
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
  const { toast } = useToast();
  const isSubmittingRef = useRef(false);

  // Use React Query to fetch property data
  const {
    data: fetchedProperty,
    isLoading: isLoadingProperty,
    error,
  } = useProperty(property?.slug || undefined);

  // Use React Query mutation for saving
  const savePropertyMutation = useSaveProperty();

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
            description: img.description || undefined,
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
        sections:
          property.sections?.map((section) => ({
            title: section.title || "",
            content: section.content || "",
            images: section.images || [],
          })) || [],
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
    mode: "onBlur",
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

    // Prevent double submission using ref
    if (isSubmittingRef.current) {
      console.log("Form submission already in progress, skipping...");
      return;
    }

    // Prevent double submission using mutation state
    if (savePropertyMutation.isPending) {
      console.log("Form submission already in progress, skipping...");
      return;
    }

    // Set submission flag
    isSubmittingRef.current = true;

    // Additional validation for hero images
    if (!data.heroImages || data.heroImages.length === 0) {
      toast({
        title: "Eroare de validare",
        description: "Cel puțin o imagine hero este obligatorie.",
        variant: "destructive",
      });
      isSubmittingRef.current = false;
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

    try {
      const savedProperty = await savePropertyMutation.mutateAsync(
        transformedProperty
      );
      onSave(savedProperty);
      toast({
        title: "Succes",
        description: "Proprietatea a fost salvată cu succes!",
      });
    } catch (error) {
      console.error("Error saving property:", error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare la salvarea proprietății.",
        variant: "destructive",
      });
    } finally {
      // Reset submission flag
      isSubmittingRef.current = false;
    }
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

  // Show loading state while fetching property data
  if (isLoadingProperty && property?.slug) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600">Se încarcă datele proprietății...</p>
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
                form.formState.isSubmitting || savePropertyMutation.isPending
              }
            >
              {form.formState.isSubmitting || savePropertyMutation.isPending
                ? "Salvând..."
                : fetchedProperty || property
                ? "Actualizează"
                : "Creează"}{" "}
              Proprietatea
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          <span className="text-red-500">*</span> Câmpuri obligatorii
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
                    <FormLabel>
                      Titlu <span className="text-red-500">*</span>
                    </FormLabel>
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
                    <FormLabel>
                      Slug <span className="text-red-500">*</span>
                    </FormLabel>
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
                    <FormLabel>Descriere</FormLabel>
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
                    <FormLabel>Descriere Completă</FormLabel>
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
                    <FormLabel>
                      Categorie <span className="text-red-500">*</span>
                    </FormLabel>
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
                    <FormLabel>Adresă</FormLabel>
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
                    <FormLabel>Locație</FormLabel>
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
                    <FormLabel>Preț</FormLabel>
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
                      <FormLabel>Dormitoare</FormLabel>
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
                      <FormLabel>Băi</FormLabel>
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
                      <FormLabel>Suprafață (mp)</FormLabel>
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
                      <FormLabel>Anul Construcției</FormLabel>
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
                    <FormLabel>
                      URL Imagine <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/image.jpg sau folosește blob storage"
                        {...field}
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
            <CardTitle className="flex items-center justify-between">
              Imagini Hero <span className="text-red-500">*</span>
              <Button
                type="button"
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
                        <FormControl>
                          <Input placeholder="URL Imagine" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`heroImages.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Descrierea imaginii" {...field} />
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
                  onClick={() => removeHeroImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Story Chapters Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Slide-uri
              <Button
                type="button"
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
                    onClick={() => removeStoryChapter(chapterIndex)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`storyChapters.${chapterIndex}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titlul Capitolului</FormLabel>
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
                        <FormLabel>Imaginea Capitolului</FormLabel>
                        <FormControl>
                          <Input placeholder="URL Imagine" {...field} />
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
                      <FormLabel>Narațiune</FormLabel>
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
                        <FormLabel>Durata (secunde)</FormLabel>
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
        </Card>

        {/* Sections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Secțiuni de imagini
              <Button
                type="button"
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`sections.${sectionIndex}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titlul Secțiunii (opțional)</FormLabel>
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
                      <FormLabel>Conținutul Secțiunii (opțional)</FormLabel>
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
                    <Button
                      type="button"
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

                  {(form.watch(`sections.${sectionIndex}.images`) || []).map(
                    (imageUrl, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="flex gap-4 items-start p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex-1 space-y-2">
                          <Input
                            value={imageUrl}
                            onChange={(e) => {
                              const currentImages =
                                form.watch(`sections.${sectionIndex}.images`) ||
                                [];
                              const updatedImages = [...currentImages];
                              updatedImages[imageIndex] = e.target.value;
                              form.setValue(
                                `sections.${sectionIndex}.images`,
                                updatedImages
                              );
                            }}
                            placeholder="URL Imagine"
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
                          onClick={() => {
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
