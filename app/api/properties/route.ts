import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/auth";

export async function GET(request: NextRequest) {
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

    // Transform properties to match the expected format
    const transformedProperties = properties.map((property) => ({
      ...property,
      heroImages: property.heroImages || [],
      galleryImages: property.galleryImages || [],
      storyChapters: property.storyChapters || [],
      sections: property.sections || [],
    }));

    return NextResponse.json(transformedProperties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  } finally {
  }
}

export async function POST(request: NextRequest) {
  // Require admin authentication for creating properties
  try {
    await requireAdminAuth(request);
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }

  let body: any;

  try {
    body = await request.json();
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
        image,
        tags: tags || [],
        // Create hero images
        heroImages: {
          create:
            heroImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create gallery images
        galleryImages: {
          create:
            galleryImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create story chapters
        storyChapters: {
          create:
            storyChapters?.map((chapter: any) => ({
              title: chapter.title,
              narrative: chapter.narrative,
              image: chapter.image,
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

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  } finally {
  }
}

export async function PUT(request: NextRequest) {
  // Require admin authentication for updating properties
  try {
    await requireAdminAuth(request);
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }

  let body: any;

  try {
    body = await request.json();

    const {
      id,
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

    if (!id) {
      return NextResponse.json(
        { error: "Property ID is required for updates" },
        { status: 400 }
      );
    }

    // First, delete all related data to recreate it
    await prisma.propertyImage.deleteMany({
      where: {
        OR: [{ heroPropertyId: id }, { galleryPropertyId: id }],
      },
    });
    await prisma.propertyStoryChapter.deleteMany({
      where: { propertyId: id },
    });
    await prisma.propertySection.deleteMany({
      where: { propertyId: id },
    });

    // Update the property with all related data
    const property = await prisma.property.update({
      where: { id },
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
        image,
        tags: tags || [],
        // Create hero images
        heroImages: {
          create:
            heroImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create gallery images
        galleryImages: {
          create:
            galleryImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        // Create story chapters
        storyChapters: {
          create:
            storyChapters?.map((chapter: any) => ({
              title: chapter.title,
              narrative: chapter.narrative,
              image: chapter.image,
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

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
