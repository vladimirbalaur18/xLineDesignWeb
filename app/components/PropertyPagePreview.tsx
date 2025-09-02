import PropertyPageView from "@/components/PropertyPageView";
import type { Property } from "@/lib/properties";

export default function PropertyPagePreview({
  property,
}: {
  property: Property;
}) {
  return <PropertyPageView property={property} />;
}
