"use client";

import type React from "react";

import { useState } from "react";
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
  const [formData, setFormData] = useState<Property>(
    property || {
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
      year: new Date().getFullYear().toString(),
      image: "",
      tags: [],
      heroImages: [],
      galleryImages: [],
      storyChapters: [],
      sections: [],
    }
  );

  const [newFeature, setNewFeature] = useState("");
  const [newTag, setNewTag] = useState("");
  const [modalImage, setModalImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features?.filter((_, i) => i !== index) || [],
    }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((_, i) => i !== index) || [],
    }));
  };

  const addHeroImage = () => {
    setFormData((prev) => ({
      ...prev,
      heroImages: [...prev.heroImages, { url: "", description: "" }],
    }));
  };

  const updateHeroImage = (
    index: number,
    field: keyof PropertyImage,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      heroImages: prev.heroImages.map((img, i) =>
        i === index ? { ...img, [field]: value } : img
      ),
    }));
  };

  const removeHeroImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      heroImages: prev.heroImages.filter((_, i) => i !== index),
    }));
  };

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          title: "",
          content: "",
          images: [],
        },
      ],
    }));
  };

  const updateSection = (
    index: number,
    field: keyof PropertySection,
    value: string | boolean | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      ),
    }));
  };

  const removeSection = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const addSectionImage = (sectionIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              images: [...section.images, ""],
            }
          : section
      ),
    }));
  };

  const updateSectionImage = (
    sectionIndex: number,
    imageIndex: number,
    field: keyof PropertyImage,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              images: section.images.map((img, j) =>
                j === imageIndex ? value : img
              ),
            }
          : section
      ),
    }));
  };

  const removeSectionImage = (sectionIndex: number, imageIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              images: section.images.filter((_, j) => j !== imageIndex),
            }
          : section
      ),
    }));
  };

  // Story Chapter Management Functions
  const addStoryChapter = () => {
    setFormData((prev) => ({
      ...prev,
      storyChapters: [
        ...prev.storyChapters,
        {
          title: "",
          narrative: "",
          image: "",
          duration: 5,
          voiceOver: "",
        },
      ],
    }));
  };

  const removeStoryChapter = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      storyChapters: prev.storyChapters.filter((_, i) => i !== index),
    }));
  };

  const updateStoryChapter = (
    index: number,
    field: keyof PropertyStoryChapter,
    value: string | number | { x: number; y: number }
  ) => {
    setFormData((prev) => ({
      ...prev,
      storyChapters: prev.storyChapters.map((chapter, i) =>
        i === index ? { ...chapter, [field]: value } : chapter
      ),
    }));
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
    if (!url) return null;
    return (
      <div
        className={`relative overflow-hidden rounded-lg bg-muted cursor-pointer ${className}`}
        onClick={() => setModalImage({ url, alt })}
      >
        <OptimizedImage
          src={url || "/placeholder.svg"}
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-playfair font-bold">
          {property ? "Editează Proprietatea" : "Creează Proprietatea Nouă"}
        </h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Anulează
          </Button>
          <Button type="submit">
            {property ? "Actualizează" : "Creează"} Proprietatea
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informații de Bază</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Titlu</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Titlul proprietății"
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                placeholder="slug-proprietate"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Descriere</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Descriere scurtă"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="fullDescription">Descriere Completă</Label>
              <Textarea
                id="fullDescription"
                value={formData.fullDescription || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    fullDescription: e.target.value,
                  }))
                }
                placeholder="Descriere detaliată"
                rows={5}
              />
            </div>

            <div>
              <Label htmlFor="category">Categorie</Label>
              <Select
                value={formData.category}
                onValueChange={(value: Property["category"]) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interiorDesign">
                    Design Interior
                  </SelectItem>
                  <SelectItem value="architecture">Arhitectură</SelectItem>
                  <SelectItem value="landscapeDesign">
                    Design Peisagistic
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Property Details */}
        <Card>
          <CardHeader>
            <CardTitle>Detalii Proprietate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address">Adresă</Label>
              <Input
                id="address"
                value={formData.address || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, address: e.target.value }))
                }
                placeholder="Adresa proprietății"
              />
            </div>

            <div>
              <Label htmlFor="location">Locație</Label>
              <Input
                id="location"
                value={formData.location || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
                placeholder="Oraș, Județ"
              />
            </div>

            <div>
              <Label htmlFor="price">Preț</Label>
              <Input
                id="price"
                value={formData.price || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, price: e.target.value }))
                }
                placeholder="€500,000"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bedrooms">Dormitoare</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.bedrooms || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      bedrooms: Number.parseInt(e.target.value) || 0,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="bathrooms">Băi</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={formData.bathrooms || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      bathrooms: Number.parseInt(e.target.value) || 0,
                    }))
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="area">Suprafață (mp)</Label>
                <Input
                  id="area"
                  type="number"
                  value={formData.area || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      area: Number.parseInt(e.target.value) || 0,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="yearBuilt">Anul Construcției</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  value={formData.yearBuilt || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      yearBuilt:
                        Number.parseInt(e.target.value) ||
                        new Date().getFullYear(),
                    }))
                  }
                />
              </div>
            </div>

            <div>
              <Label htmlFor="year">An</Label>
              <Input
                id="year"
                value={formData.year}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, year: e.target.value }))
                }
                placeholder="2024"
                required
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
            <div>
              <Label htmlFor="image">URL Imagine</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, image: e.target.value }))
                }
                placeholder="https://example.com/image.jpg sau folosește blob storage"
                required
              />
            </div>
            {formData.image && (
              <div className="mt-4">
                <Label>Previzualizare</Label>
                <ImagePreview
                  url={formData.image}
                  alt={formData.title}
                  className="w-128 h-128"
                />
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Caracteristici</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Adaugă o caracteristică"
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addFeature())
                  }
                />
                <Button type="button" onClick={addFeature}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.features?.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {feature}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => removeFeature(index)}
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
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Adaugă o etichetă"
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                />
                <Button type="button" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="gap-1">
                    {tag}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => removeTag(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Features */}
      </div>
      {/* Hero Images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Imagini Hero
            <Button type="button" onClick={addHeroImage} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Imagine
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.heroImages.map((image, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 border rounded-lg"
            >
              <div className="flex-1 space-y-2">
                <Input
                  value={image.url}
                  onChange={(e) =>
                    updateHeroImage(index, "url", e.target.value)
                  }
                  placeholder="URL Imagine"
                />
                <Input
                  value={image.description || ""}
                  onChange={(e) =>
                    updateHeroImage(index, "description", e.target.value)
                  }
                  placeholder="Descrierea imaginii"
                />
              </div>
              {image.url && (
                <ImagePreview
                  url={image.url}
                  alt={image.description || `Hero image ${index + 1}`}
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
            <Button type="button" onClick={addStoryChapter} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Capitol
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {formData.storyChapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="border rounded-lg p-4 space-y-4">
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
                <div>
                  <Label>Titlul Capitolului</Label>
                  <Input
                    value={chapter.title}
                    onChange={(e) =>
                      updateStoryChapter(chapterIndex, "title", e.target.value)
                    }
                    placeholder="Titlul capitolului"
                  />
                </div>
                <div>
                  <Label>Imaginea Capitolului</Label>
                  <Input
                    value={chapter.image}
                    onChange={(e) =>
                      updateStoryChapter(chapterIndex, "image", e.target.value)
                    }
                    placeholder="URL Imagine"
                  />
                </div>
              </div>

              <div>
                <Label>Narațiune</Label>
                <Textarea
                  value={chapter.narrative}
                  onChange={(e) =>
                    updateStoryChapter(
                      chapterIndex,
                      "narrative",
                      e.target.value
                    )
                  }
                  placeholder="Textul narațiunii capitolului"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label>Durata (secunde)</Label>
                  <Input
                    type="number"
                    value={chapter.duration}
                    onChange={(e) =>
                      updateStoryChapter(
                        chapterIndex,
                        "duration",
                        Number(e.target.value)
                      )
                    }
                    placeholder="Durata în secunde"
                    min="1"
                    max="60"
                  />
                </div>
              </div>

              {/* Focus Point Section */}
              <div>
                <Label>Punctul de Focus (opțional)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="number"
                    value={chapter.focusPoint?.x || ""}
                    onChange={(e) =>
                      updateStoryChapter(chapterIndex, "focusPoint", {
                        x: Number(e.target.value),
                        y: chapter.focusPoint?.y || 0,
                      })
                    }
                    placeholder="Coordonata X (0-1)"
                    step="0.01"
                    min="0"
                    max="1"
                  />
                  <Input
                    type="number"
                    value={chapter.focusPoint?.y || ""}
                    onChange={(e) =>
                      updateStoryChapter(chapterIndex, "focusPoint", {
                        x: chapter.focusPoint?.x || 0,
                        y: Number(e.target.value),
                      })
                    }
                    placeholder="Coordonata Y (0-1)"
                    step="0.01"
                    min="0"
                    max="1"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Coordonatele punctului de focus (0,0 = stânga sus, 1,1 =
                  dreapta jos)
                </p>
              </div>

              {/* Image Preview */}
              {chapter.image && (
                <div>
                  <Label>Previzualizare</Label>
                  <div
                    className="relative w-full h-56 bg-muted rounded-md overflow-hidden cursor-pointer"
                    onClick={() =>
                      setModalImage({
                        url: chapter.image,
                        alt: chapter.title || `Chapter ${chapterIndex + 1}`,
                      })
                    }
                  >
                    <OptimizedImage
                      src={chapter.image}
                      alt={chapter.title || `Chapter ${chapterIndex + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    {chapter.focusPoint && (
                      <div
                        className="absolute w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"
                        style={{
                          left: `${chapter.focusPoint.x * 100}%`,
                          top: `${chapter.focusPoint.y * 100}%`,
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {formData.storyChapters.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Nu au fost adăugate capitole încă. Apăsați "Adaugă Capitol" pentru
              a crea primul capitol.
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Secțiuni de imagini
            <Button type="button" onClick={addSection} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Adaugă Secțiune
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {formData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border rounded-lg p-4 space-y-4">
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
                <div>
                  <Label>Titlul Secțiunii</Label>
                  <Input
                    value={section.title}
                    onChange={(e) =>
                      updateSection(sectionIndex, "title", e.target.value)
                    }
                    placeholder="Titlul secțiunii"
                  />
                </div>
                <div>
                  <Label>Descrierea Secțiunii</Label>
                  <Textarea
                    value={section.content || ""}
                    onChange={(e) =>
                      updateSection(sectionIndex, "content", e.target.value)
                    }
                    placeholder="Descrierea secțiunii"
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <Label>Conținutul Secțiunii</Label>
                <Textarea
                  value={section.content || ""}
                  onChange={(e) =>
                    updateSection(sectionIndex, "content", e.target.value)
                  }
                  placeholder="Conținutul detaliat al secțiunii"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Imaginile Secțiunii</Label>
                  <Button
                    type="button"
                    onClick={() => addSectionImage(sectionIndex)}
                    size="sm"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adaugă Imagine
                  </Button>
                </div>

                {section.images.map((imageUrl, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="flex gap-4 items-start p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex-1 space-y-2">
                      <Input
                        value={imageUrl}
                        onChange={(e) =>
                          updateSectionImage(
                            sectionIndex,
                            imageIndex,
                            "url",
                            e.target.value
                          )
                        }
                        placeholder="URL Imagine"
                      />
                    </div>
                    {imageUrl && (
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
                      onClick={() =>
                        removeSectionImage(sectionIndex, imageIndex)
                      }
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
  );
}
