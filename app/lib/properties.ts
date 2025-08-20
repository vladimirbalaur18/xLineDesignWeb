export interface PropertyImage {
  url: string;
  description?: string;
  focusPoint?: { x: number; y: number };
}

export interface PropertyStoryChapter {
  title: string;
  narrative: string;
  image: string;
  focusPoint?: { x: number; y: number };
  duration: number;
}

export interface PropertySection {
  title?: string;
  content?: string;
  images: string[];
}

export interface Property {
  id?: string; // Prisma generates this
  slug: string;
  title: string;
  description?: string;
  fullDescription?: string;
  address?: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  yearBuilt?: number;
  features?: string[];
  category: "interiorDesign" | "architecture" | "landscapeDesign";
  location?: string;
  year: string;
  image: string;
  tags?: string[];
  heroImages: PropertyImage[];
  galleryImages: PropertyImage[];
  storyChapters: PropertyStoryChapter[];
  sections: PropertySection[];
  createdAt?: Date; // Prisma timestamps
  updatedAt?: Date; // Prisma timestamps
}
