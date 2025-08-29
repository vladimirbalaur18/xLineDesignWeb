import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { logger } from "@/lib/logger";
import { getClientIp, gradualRateLimit } from "@/lib/rate-limit";
import { requireAdminAuth } from "@/lib/auth";
import {
  Property,
  PropertyImage,
  PropertySection,
  PropertyStoryChapter,
} from "@/lib/properties";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(transformedProperties).length;

    // Log successful fetch with detailed request information
    logger.projectAction({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime,
        1
      ),
      statusCode: 200,
      metadata: {
        count: properties.length,
        includeImages,
        includeChapters,
        includeSections,
      },
    });

    return NextResponse.json(transformedProperties);
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_fetch_error",
          ...requestContext,
          error: "Error fetching properties",
          statusCode: 500,
        },
        error
      );
    } else {
      logger.error({
        action: "project_fetch_error",
        ...requestContext,
        error: "Error fetching properties",
        statusCode: 500,
      });
    }

    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

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
    // Add request body to context
    const contextWithBody = logger.addRequestBody(requestContext, body);
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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(property).length;

    // Log successful creation with detailed request information
    logger.projectCreated({
      ...logger.addResponseDetails(
        contextWithBody,
        responseSize,
        processingTime,
        1
      ),
      projectId: property.id,
      projectSlug: property.slug,
      statusCode: 201,
      metadata: {
        title: property.title,
        category: property.category,
        location: property.location,
        heroImagesCount: property.heroImages.length,
        galleryImagesCount: property.galleryImages.length,
        storyChaptersCount: property.storyChapters.length,
        sectionsCount: property.sections.length,
      },
    });

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_creation_error",
          ...requestContext,
          error: "Error creating property",
          statusCode: 500,
          metadata: {
            slug: body?.slug || "unknown",
            title: body?.title || "unknown",
          },
        },
        error
      );
    } else {
      logger.error({
        action: "project_creation_error",
        ...requestContext,
        error: "Error creating property",
        statusCode: 500,
        metadata: {
          slug: body?.slug || "unknown",
          title: body?.title || "unknown",
        },
      });
    }

    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request: NextRequest) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

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
    // Add request body to context
    const contextWithBody = logger.addRequestBody(requestContext, body);

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
      logger.error({
        action: "project_update_error",
        ...requestContext,
        error: "Property ID is required for updates",
        statusCode: 400,
      });

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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(property).length;

    // Log successful update with detailed request information
    logger.projectUpdated({
      ...logger.addResponseDetails(
        contextWithBody,
        responseSize,
        processingTime,
        4
      ), // 4 DB operations: 3 deletes + 1 update
      projectId: property.id,
      projectSlug: property.slug,
      statusCode: 200,
      metadata: {
        title: property.title,
        category: property.category,
        location: property.location,
        heroImagesCount: property.heroImages.length,
        galleryImagesCount: property.galleryImages.length,
        storyChaptersCount: property.storyChapters.length,
        sectionsCount: property.sections.length,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_update_error",
          ...requestContext,
          error: "Error updating property",
          statusCode: 500,
          metadata: {
            id: body?.id || "unknown",
            slug: body?.slug || "unknown",
            title: body?.title || "unknown",
          },
        },
        error
      );
    } else {
      logger.error({
        action: "project_update_error",
        ...requestContext,
        error: "Error updating property",
        statusCode: 500,
        metadata: {
          id: body?.id || "unknown",
          slug: body?.slug || "unknown",
          title: body?.title || "unknown",
        },
      });
    }

    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
