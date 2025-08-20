import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

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

    // Transform focusPoint from JSON back to the expected format
    const transformedProperty = {
      ...property,
      heroImages: property.heroImages.map((img) => ({
        ...img,
        focusPoint: img.focusPoint as { x: number; y: number } | undefined,
      })),
      galleryImages: property.galleryImages.map((img) => ({
        ...img,
        focusPoint: img.focusPoint as { x: number; y: number } | undefined,
      })),
      storyChapters: property.storyChapters.map((chapter) => ({
        ...chapter,
        focusPoint: chapter.focusPoint as { x: number; y: number } | undefined,
      })),
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
      year,
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
        year,
        image,
        tags: tags || [],
        // Create new hero images
        heroImages: {
          create:
            heroImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
              focusPoint: img.focusPoint
                ? JSON.stringify(img.focusPoint)
                : null,
            })) || [],
        },
        // Create new gallery images
        galleryImages: {
          create:
            galleryImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
              focusPoint: img.focusPoint
                ? JSON.stringify(img.focusPoint)
                : null,
            })) || [],
        },
        // Create new story chapters
        storyChapters: {
          create:
            storyChapters?.map((chapter: any) => ({
              title: chapter.title,
              narrative: chapter.narrative,
              image: chapter.image,
              focusPoint: chapter.focusPoint
                ? JSON.stringify(chapter.focusPoint)
                : null,
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
      heroImages: property.heroImages.map((img) => ({
        ...img,
        focusPoint: img.focusPoint
          ? JSON.parse(img.focusPoint as string)
          : undefined,
      })),
      galleryImages: property.galleryImages.map((img) => ({
        ...img,
        focusPoint: img.focusPoint
          ? JSON.parse(img.focusPoint as string)
          : undefined,
      })),
      storyChapters: property.storyChapters.map((chapter) => ({
        ...chapter,
        focusPoint: chapter.focusPoint
          ? JSON.parse(chapter.focusPoint as string)
          : undefined,
      })),
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
