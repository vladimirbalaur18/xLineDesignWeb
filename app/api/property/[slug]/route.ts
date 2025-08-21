import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

/**
 * Retrieve a single property by slug, including related hero images, gallery images, story chapters, and sections.
 *
 * Fetches the property identified by the route `slug`. Returns a 404 JSON error if no property is found,
 * or a 200 JSON response containing the property with its related entities. On internal failure returns
 * a 500 JSON error. The Prisma client is disconnected after the operation.
 *
 * @param params - Promise resolving to an object with the route `slug` string used to look up the property
 * @returns A NextResponse JSON containing the property (with related arrays) on success, or an error object with status 404 or 500
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

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

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Transform property to match the expected format
    const transformedProperty = {
      ...property,
      heroImages: property.heroImages,
      galleryImages: property.galleryImages,
      storyChapters: property.storyChapters,
    };

    return NextResponse.json(transformedProperty);
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Updates a property identified by slug, replacing its scalar fields and all related nested data.
 *
 * Deletes existing hero/gallery images, story chapters, and sections for the property, then updates
 * the property record with provided scalar fields and recreates the nested relations from the
 * payload arrays (`heroImages`, `galleryImages`, `storyChapters`, `sections`).
 *
 * Numeric fields (`bedrooms`, `bathrooms`, `area`, `yearBuilt`) are parsed from the incoming values;
 * missing numeric fields become `null`. `features` and `tags` default to empty arrays when omitted.
 *
 * @param params - An object containing a Promise that resolves to `{ slug }`; `slug` is used to locate the property to update.
 * @returns A NextResponse containing the updated property (including `heroImages`, `galleryImages`, `storyChapters`, and `sections`) on success, or a 500 JSON error on failure.
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const {
      title,
      description,
      fullDescription,
      address,
      price,
      bedrooms,
      bathrooms,
      area,
      yearBuilt,
      features,
      category,
      location,
      image,
      tags,
      heroImages,
      galleryImages,
      storyChapters,
      sections,
    } = body;

    // First, delete existing related data
    await prisma.propertyImage.deleteMany({
      where: {
        OR: [{ heroProperty: { slug } }, { galleryProperty: { slug } }],
      },
    });

    await prisma.propertyStoryChapter.deleteMany({
      where: {
        property: { slug },
      },
    });

    await prisma.propertySection.deleteMany({
      where: {
        property: { slug },
      },
    });

    // Update the property with new data
    const property = await prisma.property.update({
      where: { slug },
      data: {
        title,
        description,
        fullDescription,
        address,
        price,
        bedrooms: bedrooms ? parseInt(bedrooms) : null,
        bathrooms: bathrooms ? parseInt(bathrooms) : null,
        area: area ? parseFloat(area) : null,
        yearBuilt: yearBuilt ? parseInt(yearBuilt) : null,
        features: features || [],
        category,
        location,
        image,
        tags: tags || [],
        // Create new hero images
        heroImages: {
          create:
            heroImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create new gallery images
        galleryImages: {
          create:
            galleryImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create new story chapters
        storyChapters: {
          create:
            storyChapters?.map((chapter: any) => ({
              title: chapter.title,
              narrative: chapter.narrative,
              image: chapter.image,
              duration: chapter.duration,
            })) || [],
        },
        // Create new sections
        sections: {
          create:
            sections?.map((section: any) => ({
              title: section.title || null,
              content: section.content || null,
              images: section.images || [],
            })) || [],
        },
      },
      include: {
        heroImages: true,
        galleryImages: true,
        storyChapters: true,
        sections: true,
      },
    });

    // Transform the response to match the expected format
    const transformedProperty = {
      ...property,
      heroImages: property.heroImages,
      galleryImages: property.galleryImages,
      storyChapters: property.storyChapters,
      sections: property.sections,
    };

    return NextResponse.json(transformedProperty);
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Deletes a property identified by its slug.
 *
 * Receives route params, removes the property (and its related records via Prisma cascade), and returns a JSON response indicating success. On failure returns a 500 JSON error.
 *
 * @param params - A promise that resolves to route parameters; must include `slug`, the identifier of the property to delete.
 * @returns A NextResponse JSON object with `{ message: "Property deleted successfully" }` on success or `{ error: "Failed to delete property" }` with status 500 on failure.
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Delete the property and all related data
    await prisma.property.delete({
      where: { slug },
    });

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Failed to delete property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
