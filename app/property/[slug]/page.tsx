import { properties } from "@/lib/properties";
import type { Metadata, ResolvingMetadata } from "next";
import PropertyPageClient from "./PropertyPageClient.tsx";
import { headers } from "next/headers";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const propertyUrl = `${protocol}://${host}/property/${property.slug}`;

  return {
    title: `${property.title} | xLineDesign`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
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
      description: property.description,
      images: [property.image],
    },
  };
}

export async function generateStaticParams() {
  return properties.map(({ slug }) => ({
    slug: slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PropertyPageClient propertySlug={slug} />;
}
