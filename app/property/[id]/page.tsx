import { properties } from "@/lib/properties";
import type { Metadata } from "next";
import PropertyPageClient from "./PropertyPageClient";
import { headers } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const property = properties.find((p) => String(p.id) === String(params.id));
  if (!property) return {};

  const headersList = headers();
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

export default function Page({ params }: { params: { id: string } }) {
  return <PropertyPageClient propertyId={params.id} />;
}
