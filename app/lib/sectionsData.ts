// This would typically come from an API or database
// For now, we'll simulate the data structure that would be managed by the CMS

export interface PropertySection {
  id: string;
  name: string;
  title: string;
  content: string;
  isVisible: boolean;
  order: number;
  type: "homepage" | "property-detail";
}

// This simulates data that would be fetched from the CMS
export const getPropertyDetailSections = (): PropertySection[] => {
  // In a real app, this would fetch from your API/database
  return [
    {
      id: "perfect-lifestyle",
      name: "Perfect Lifestyle",
      title: "PERFECT LIFESTYLE",
      content:
        "Experience unparalleled luxury living in spaces designed for the modern lifestyle. Every detail has been meticulously crafted to provide comfort, elegance, and functionality.",
      isVisible: true,
      order: 1,
      type: "property-detail",
    },
    {
      id: "design-excellence",
      name: "Design Excellence",
      title: "DESIGN EXCELLENCE",
      content:
        "Architectural innovation meets timeless design principles. Our commitment to excellence is evident in every line, every surface, and every carefully considered detail.",
      isVisible: true,
      order: 2,
      type: "property-detail",
    },
    {
      id: "urban-sanctuary",
      name: "Urban Sanctuary",
      title: "URBAN SANCTUARY",
      content:
        "Find tranquility within the bustling metropolis. This urban sanctuary offers a peaceful retreat from city life while maintaining seamless connectivity to everything that matters.",
      isVisible: true,
      order: 3,
      type: "property-detail",
    },
  ];
};

// Function to get sections by type and visibility
export const getVisiblePropertySections = (): PropertySection[] => {
  return getPropertyDetailSections()
    .filter(
      (section) => section.isVisible && section.type === "property-detail"
    )
    .sort((a, b) => a.order - b.order);
};
