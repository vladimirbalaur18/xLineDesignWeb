import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";
import { filtersMap } from "@/shared/filtersMap";

function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  return vercelUrl.replace(/\/$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();

  // Fetch property slugs and last modified dates
  const properties = await prisma.property.findMany({
    select: {
      slug: true,
      updatedAt: true,
      image: true,
      heroImages: { select: { url: true } },
      galleryImages: { select: { url: true } },
      sections: { select: { images: true } },
      storyChapters: { select: { image: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  const ensureAbsoluteUrl = (url: string | null | undefined): string | null => {
    if (!url) return null;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  // Property pages
  const propertyEntries: MetadataRoute.Sitemap = properties.map((p) => {
    const imageUrls = new Set<string>();

    const mainImage = ensureAbsoluteUrl(p.image);
    if (mainImage) {
      imageUrls.add(mainImage);
    }

    p.heroImages.forEach((img) => {
      const resolved = ensureAbsoluteUrl(img.url);
      if (resolved) {
        imageUrls.add(resolved);
      }
    });

    p.galleryImages.forEach((img) => {
      const resolved = ensureAbsoluteUrl(img.url);
      if (resolved) {
        imageUrls.add(resolved);
      }
    });

    p.sections.forEach((section) => {
      section.images.forEach((imgUrl) => {
        const resolved = ensureAbsoluteUrl(imgUrl);
        if (resolved) {
          imageUrls.add(resolved);
        }
      });
    });

    p.storyChapters.forEach((chapter) => {
      const resolved = ensureAbsoluteUrl(chapter.image);
      if (resolved) {
        imageUrls.add(resolved);
      }
    });

    const images = Array.from(imageUrls);

    return {
      url: `${baseUrl}/property/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      ...(images.length ? { images } : {}),
    };
  });

  // Projects page + one entry per filter (exclude "all" query)
  const filterKeys = Object.keys(filtersMap).filter(
    (key) => key !== "all"
  ) as Array<keyof typeof filtersMap>;

  const projectsEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...filterKeys.map((key) => ({
      url: `${baseUrl}/projects?filter=${encodeURIComponent(key)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  return [...projectsEntries, ...propertyEntries];
}
