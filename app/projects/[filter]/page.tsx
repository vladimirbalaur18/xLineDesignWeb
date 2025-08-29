import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";
import ProjectsPageClient from "../ProjectsPageClient";
import { filtersMap } from "../../../shared/filtersMap";
import type { Property } from "@/lib/properties";
import { prisma } from "@/lib/prisma";

// Generate static params for all filter options
export async function generateStaticParams() {
  const filterKeys = Object.keys(filtersMap);
  return filterKeys.map((filter) => ({
    filter: filter,
  }));
}

// Generate metadata for each filter page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ filter: string }>;
}): Promise<Metadata> {
  const { filter } = await params;

  if (!filtersMap[filter as keyof typeof filtersMap]) {
    return {
      title: "Projects - xLine Design",
    };
  }

  const filterName = filtersMap[filter as keyof typeof filtersMap];
  const isAllProjects = filter === "all";

  return {
    title: isAllProjects
      ? "Complete Portfolio - xLine Design"
      : `${filterName} Projects - xLine Design`,
    description: isAllProjects
      ? "Explore our complete portfolio of architectural projects including interior design, architecture, and landscape design."
      : `Explore our ${filterName.toLowerCase()} projects. Professional architectural services by xLine Design.`,
  };
}

// Fetch all projects (cached)
const getAllProjects = unstable_cache(
  async (): Promise<Property[]> => {
    try {
      const properties = await prisma.property.findMany({
        include: {
          heroImages: true,
          galleryImages: false, // Not needed for projects listing
          storyChapters: false, // Not needed for projects listing
          sections: false, // Not needed for projects listing
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      // Transform properties to match the expected format
      const transformedProperties = properties.map((property) => ({
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
        heroImages: (property.heroImages || []).map((img) => ({
          ...img,
          description: img.description || undefined,
        })),
        galleryImages: [], // Not needed for projects listing
        storyChapters: [], // Not needed for projects listing
        sections: [], // Not needed for projects listing
      }));

      return transformedProperties;
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      return [];
    }
  },
  ["projects"],
  { tags: ["projects"] }
);

// Fetch projects server-side with filtering
async function getProjects(filter: string): Promise<Property[]> {
  const allProjects = await getAllProjects();

  // Apply server-side filtering
  if (filter !== "all") {
    return allProjects.filter((project) => project.category === filter);
  }

  return allProjects;
}

export default async function ProjectsFilterPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = await params;

  // Validate filter parameter
  if (!filtersMap[filter as keyof typeof filtersMap]) {
    notFound();
  }

  // Fetch projects server-side
  const projects = await getProjects(filter);

  return (
    <ProjectsPageClient
      projects={projects}
      currentFilter={filter}
      filtersMap={filtersMap}
    />
  );
}
