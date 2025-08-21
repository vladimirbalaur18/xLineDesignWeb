import { PrismaClient } from "../../generated/prisma";
import type { Metadata, ResolvingMetadata } from "next";
import PropertyPageClient from "./PropertyPageClient.tsx";
import { headers } from "next/headers";

const prisma = new PrismaClient();

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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

    return {
      title: `${property.title} | xLineDesign`,
      description: property.description || undefined,
      openGraph: {
        title: property.title,
        description: property.description || undefined,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/property/${property.slug}`,
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PropertyPageClient propertySlug={slug} />;
}
