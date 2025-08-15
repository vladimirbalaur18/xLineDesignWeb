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
  voiceOver?: string;
}

export interface PropertySection {
  name: string;
  title: string;
  content: string;
  isVisible: boolean;
  order: number;
  type: "property-detail";
  images: string[]; // 1 or 2 Unsplash or other image URLs
}

export interface Property {
  slug: string;
  title: string;
  description: string;
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
}

export const properties: Property[] = [
  {
    slug: "apartament-buiucani",
    title: "Apartament Buiucani",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 86.8,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/101/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "nicolaie-rascanovca",
    title: "Nicolaie rascanovca",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 32,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/100/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "ghidighici",
    title: "Ghidighici",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 82.5,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/44.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/45.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/46.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/47.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/48.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/49.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/50.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/51.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/52.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/53.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/54.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/55.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/56.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/57.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/58.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/59.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/60.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/99/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "ap-durlesti-120",
    title: "Ap. durlesti 120",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 0, // Unknown area
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/95/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "casa-doua-nivele",
    title: "Casa doua nivele",
    description: "",
    fullDescription: "",
    address: "Moldova",
    price: "",
    area: 120,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Moldova",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/44.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/45.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/46.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/47.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/48.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/49.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/50.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/51.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/52.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/53.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/54.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/82/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },

  {
    slug: "mircea-cel-batran",
    title: "Mircea cel batran",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 86,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/61/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "strada-spartacus",
    title: "Strada spartacus",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 89,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/44.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/45.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/46.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/47.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/48.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/49.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/50.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/51.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/52.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/53.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/54.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/60/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "office-calea-iesilor",
    title: "Office calea iesilor",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 89,
    yearBuilt: 2024,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/58/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "bogdan-voievod",
    title: "Bogdan Voievod",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 50,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/56/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },

  {
    slug: "mircea-cel-batran-16",
    title: "Mircea cel bătrîn 16",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 81,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/44.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/45.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/46.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/47.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/48.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/49.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/50.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/51.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/52.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/53.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/44/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "str-ioan-radu-27",
    title: "Str. ioan radu 27",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 53,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/38/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "or-hincesti",
    title: "Or.Hîncești",
    description: "",
    fullDescription: "",
    address: "Hîncești",
    price: "",
    area: 102,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Hîncești",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/0.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/1.5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/10.5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/11.5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/2.5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/4.5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/35/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "drumul-taberei",
    title: "Drumul taberei",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 46.5,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/7.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/8.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/33/9.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "str-florilor",
    title: "Str. Florilor",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 89,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: [],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/0.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/25%2C5.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/43.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/baie1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/32/baie2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "bd-mircea-cel-batran-41b",
    title: "BD.Mircea cel batran 41/B",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 86,
    yearBuilt: 2023,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2023",
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/1.jpg",
    tags: [],
    heroImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/0.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/0.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/10.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/12.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/13.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/14.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/15.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/17.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/18.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/19.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/20.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/22.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/23.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/24.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/25.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/27.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/28.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/29.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/30.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C2.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C3.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C4.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31%2C6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/32.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/33.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/34.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/35.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/37.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/38.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/39.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/40.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/31/42.jpg",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "apartament-exfactor",
    title: "Apartament Exfactor",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 85,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
    tags: [],
    heroImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/2.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/3.jpg",
        focusPoint: { x: 60, y: 40 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/2.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/3.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/4.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/5.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/7.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/8.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/9.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/10.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/12.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/13.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/14.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/15.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/17.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/18.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/19.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/20.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/22.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/23.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/24.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/25.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/27.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/28.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/29.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/30.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/32.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/33.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/34.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/35.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/37.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/38.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/39.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/40.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/42.jpg",
        focusPoint: { x: 40, y: 60 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
];
