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
    select: { slug: true, updatedAt: true },
    orderBy: { updatedAt: "desc" },
  });

  // Property pages
  const propertyEntries: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${baseUrl}/property/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

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
