import { PrismaClient } from "../../generated/prisma";
import type { Metadata, ResolvingMetadata } from "next";
import PropertyPageClient from "./PropertyPageClient.tsx";
import { headers } from "next/headers";

const prisma = new PrismaClient();

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * Generates dynamic page metadata for a property identified by slug.
 *
 * Looks up the property in the database and, if found, returns a Metadata
 * object including title, description, Open Graph data (with a 1200×630 image)
 * and Twitter card information. If no property is found or an error occurs,
 * an empty metadata object is returned.
 *
 * The function reads the current request's `host` and `x-forwarded-proto`
 * headers to construct the canonical property URL. It also disconnects the
 * Prisma client before exiting.
 *
 * @param params - Resolved route parameters; must include a `slug` string.
 * @param parent - Parent metadata resolver (passed through by Next.js).
 * @returns The assembled Metadata for the property, or an empty object on miss/error.
 */
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  try {
    const property = await prisma.property.findUnique({
      where: { slug },
      select: {
        title: true,
        description: true,
        image: true,
        slug: true,
      },
    });

    if (!property) return {};

    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || "https";
    const propertyUrl = `${protocol}://${host}/property/${property.slug}`;

    return {
      title: `${property.title} | xLineDesign`,
      description: property.description || undefined,
      openGraph: {
        title: property.title,
        description: property.description || undefined,
        url: propertyUrl,
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
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Fetches all property slugs from the database and returns them as route params for static generation.
 *
 * Returns an array of objects shaped like `{ slug: string }`. On error an empty array is returned.
 * This function also disconnects the Prisma client before returning.
 *
 * @returns An array of route parameter objects for Next.js static pre-rendering.
 */
export async function generateStaticParams() {
  try {
    const properties = await prisma.property.findMany({
      select: {
        slug: true,
      },
    });

    return properties.map(({ slug }) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Renders the property page client for the given route slug.
 *
 * Resolves the async route `params` to obtain `slug` and returns the
 * PropertyPageClient component configured for that slug.
 *
 * @param params - A promise that resolves to an object containing the route `slug`.
 * @returns A React element that renders the property page for the resolved `slug`.
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PropertyPageClient propertySlug={slug} />;
}
