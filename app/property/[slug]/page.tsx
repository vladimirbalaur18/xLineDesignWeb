import type { Metadata, ResolvingMetadata } from "next";
import { unstable_cache } from "next/cache";
import PropertyPageClient from "./PropertyPageClient.tsx";
import type { Property } from "@/lib/properties";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params for all existing properties
export async function generateStaticParams() {
  try {
    const properties = await prisma.property.findMany({
      select: {
        slug: true,
      },
    });

    return properties.map((property) => ({
      slug: property.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for properties:", error);
    return [];
  }
}

// Cached function to fetch property data
const getProperty = unstable_cache(
  async (slug: string): Promise<Property | null> => {
    try {
      const property = await prisma.property.findUnique({
        where: {
          slug: slug,
        },
        include: {
          heroImages: true,
          galleryImages: true,
          storyChapters: true,
          sections: true,
        },
      });

      if (!property) return null;

      // Transform property to match the expected format
      const transformedProperty: Property = {
        ...property,
        description: property.description || undefined,
        fullDescription: property.fullDescription || undefined,
        address: property.address || undefined,
        price: property.price || undefined,
        bedrooms: property.bedrooms || undefined,
        bathrooms: property.bathrooms || undefined,
        area: property.area || undefined,
        yearBuilt: property.yearBuilt || undefined,
        location: property.location || undefined,
        heroImages: property.heroImages.map((img) => ({
          ...img,
          description: img.description || undefined,
        })),
        galleryImages: property.galleryImages.map((img) => ({
          ...img,
          description: img.description || undefined,
        })),
        storyChapters: property.storyChapters || [],
        sections: (property.sections || []).map((section) => ({
          ...section,
          title: section.title || "",
          content: section.content || "",
        })),
      };

      return transformedProperty;
    } catch (error) {
      console.error("Error fetching property:", error);
      return null;
    }
  },
  ["property"],
  { tags: ["properties"] }
);

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  try {
    const property = await getProperty(slug);

    if (!property) return {};

    return {
      title: `${property.title} | xLineDesign`,
      description: property.description || undefined,
      openGraph: {
        siteName: "xLineDesign Moldova",
        title: property.title,
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
        title: property.title,
        description: property.description || undefined,
        images: [property.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch property server-side
  const property = await getProperty(slug);

  if (!property) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Proiect negăsit
          </h1>
          <p className="text-white/70 mb-6">
            Proiectul căutat nu există sau a fost șters.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-white text-black rounded hover:bg-white/90 transition-colors"
          >
            Înapoi la pagina principală
          </a>
        </div>
      </div>
    );
  }

  return <PropertyPageClient property={property} />;
}
