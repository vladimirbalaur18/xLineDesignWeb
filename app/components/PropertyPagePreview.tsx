import PropertyPageView from "@/components/PropertyPageView";
import type { Property } from "@/types/properties";

export default function PropertyPagePreview({
  property,
}: {
  property: Property;
}) {
  return <PropertyPageView property={property} />;
}
