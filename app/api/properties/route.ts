import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeImages = searchParams.get("includeImages") === "true";
    const includeChapters = searchParams.get("includeChapters") === "true";
    const includeSections = searchParams.get("includeSections") === "true";

    const properties = await prisma.property.findMany({
      include: {
        heroImages: true, // Always include for projects page
        galleryImages: includeImages || false,
        storyChapters: includeChapters || false,
        sections: includeSections || false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform focusPoint from JSON back to the expected format
    const transformedProperties = properties.map((property) => ({
      ...property,
      heroImages: property.heroImages
        ? property.heroImages.map((img) => ({
            ...img,
            focusPoint: img.focusPoint as { x: number; y: number } | undefined,
          }))
        : [],
      galleryImages: property.galleryImages
        ? property.galleryImages.map((img) => ({
            ...img,
            focusPoint: img.focusPoint as { x: number; y: number } | undefined,
          }))
        : [],
      storyChapters: property.storyChapters
        ? property.storyChapters.map((chapter) => ({
            ...chapter,
            focusPoint: chapter.focusPoint as
              | { x: number; y: number }
              | undefined,
          }))
        : [],
      sections: property.sections ? property.sections : [],
    }));

    return NextResponse.json(transformedProperties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      slug,
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

    // Create the property with all related data
    const property = await prisma.property.create({
      data: {
        slug,
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
        // Create hero images
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
        // Create gallery images
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
        // Create story chapters
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
        // Create sections
        sections: {
          create:
            sections?.map((section: any) => ({
              title: section.title || "",
              content: section.content || "",
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
    };

    return NextResponse.json(transformedProperty, { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
