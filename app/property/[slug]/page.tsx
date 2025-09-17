import prisma from "@/lib/prisma";
import type { Property } from "@/types/properties";
import type { Metadata, ResolvingMetadata } from "next";
import PropertyPageClient from "./PropertyPageClient.tsx";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const property = await prisma.property.findUnique({
      where: { slug },
      select: {
        title: true,
        description: true,
        image: true,
        slug: true,
        area: true,
        location: true,
        yearBuilt: true,
      },
    });

    if (!property) return {};

    // Build title components
    const titleParts = [property.title];
    if (property.area) titleParts.push(`${property.area} m2`);
    if (property.location) titleParts.push(property.location);
    if (property.yearBuilt) titleParts.push(property.yearBuilt.toString());

    return {
      title: titleParts.join(" | "),
      description: property.description || undefined,
      openGraph: {
        title: titleParts.join(" | "),
        description: property.description || undefined,
        url: `/property/${property.slug}`,
        type: "article",
        images: [
          {
            url: property.image,
            width: 1200,
            height: 630,
            alt: property.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: titleParts.join(" | "),
        description: property.description || undefined,
        images: [property.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  } finally {
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Server-prefetch the property for faster render
  const dbProperty = await prisma.property.findUnique({
    where: { slug },
    include: {
      heroImages: true,
      galleryImages: true,
      storyChapters: true,
      sections: true,
    },
  });

  const initialProperty: Property | undefined = dbProperty
    ? {
        id: dbProperty.id,
        slug: dbProperty.slug,
        title: dbProperty.title,
        description: dbProperty.description || undefined,
        fullDescription: dbProperty.fullDescription || undefined,
        address: dbProperty.address || undefined,
        price: dbProperty.price || undefined,
        bedrooms: dbProperty.bedrooms ?? undefined,
        bathrooms: dbProperty.bathrooms ?? undefined,
        area: dbProperty.area ?? undefined,
        yearBuilt: dbProperty.yearBuilt ?? undefined,
        features: dbProperty.features || [],
        category: dbProperty.category as Property["category"],
        location: dbProperty.location || undefined,
        image: dbProperty.image,
        tags: dbProperty.tags || [],
        heroImages: (dbProperty.heroImages || []).map((img) => ({
          url: img.url,
          description: img.description || undefined,
        })),
        galleryImages: (dbProperty.galleryImages || []).map((img) => ({
          url: img.url,
          description: img.description || undefined,
        })),
        storyChapters: (dbProperty.storyChapters || []).map((ch) => ({
          title: ch.title,
          narrative: ch.narrative,
          image: ch.image,
          duration: ch.duration,
        })),
        sections: (dbProperty.sections || []).map((sec) => ({
          title: sec.title || "",
          content: sec.content || "",
          images: sec.images || [],
        })),
        createdAt: dbProperty.createdAt,
        updatedAt: dbProperty.updatedAt,
      }
    : undefined;

  return (
    <PropertyPageClient propertySlug={slug} initialProperty={initialProperty} />
  );
}
