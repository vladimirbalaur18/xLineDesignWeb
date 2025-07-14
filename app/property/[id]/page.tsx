import { properties } from "@/lib/properties";
import type { Metadata, ResolvingMetadata } from "next";
import PropertyPageClient from "./PropertyPageClient";
import { headers } from "next/headers";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => String(p.id) === String(id));
  if (!property) return {};

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const propertyUrl = `${protocol}://${host}/property/${property.id}`;

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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PropertyPageClient propertyId={id} />;
}
