import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { logger } from "@/lib/logger";
import { requireAdminAuth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

  let slug = "";

  try {
    const paramsResult = await params;
    slug = paramsResult.slug;

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
      logger.error({
        action: "project_not_found",
        ...requestContext,
        error: "Property not found",
        statusCode: 404,
        metadata: { projectSlug: slug },
      });

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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(transformedProperty).length;

    // Log successful fetch with detailed request information
    logger.projectAction({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime,
        1
      ),
      projectId: property.id,
      statusCode: 200,
      metadata: {
        projectSlug: property.slug,
        title: property.title,
        category: property.category,
        location: property.location,
      },
    });

    return NextResponse.json(transformedProperty);
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_fetch_error",
          ...requestContext,
          error: "Error fetching property",
          statusCode: 500,
          metadata: { projectSlug: slug },
        },
        error
      );
    } else {
      logger.error({
        action: "project_fetch_error",
        ...requestContext,
        error: "Error fetching property",
        statusCode: 500,
        metadata: { projectSlug: slug },
      });
    }

    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
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
  let slug = "";

  try {
    const paramsResult = await params;
    slug = paramsResult.slug;
    body = await request.json();
    // Add request body to context
    const contextWithBody = logger.addRequestBody(requestContext, body);
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

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(transformedProperty).length;

    // Log successful update with detailed request information
    logger.projectUpdated({
      ...logger.addResponseDetails(
        contextWithBody,
        responseSize,
        processingTime,
        4
      ), // 4 DB operations: 3 deletes + 1 update
      projectId: property.id,
      statusCode: 200,
      metadata: {
        projectSlug: property.slug,
        title: property.title,
        category: property.category,
        location: property.location,
        heroImagesCount: property.heroImages.length,
        galleryImagesCount: property.galleryImages.length,
        storyChaptersCount: property.storyChapters.length,
        sectionsCount: property.sections.length,
      },
    });

    return NextResponse.json(transformedProperty);
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_update_error",
          ...requestContext,
          error: "Error updating property",
          statusCode: 500,
          metadata: {
            projectSlug: slug,
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
          projectSlug: slug,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

  // Require admin authentication for deleting properties
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

  let slug = "";

  try {
    const paramsResult = await params;
    slug = paramsResult.slug;

    // Get property info before deletion for logging
    const property = await prisma.property.findUnique({
      where: { slug },
      select: { id: true, title: true, category: true, location: true },
    });

    // Delete the property and all related data
    await prisma.property.delete({
      where: { slug },
    });

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify({
      message: "Property deleted successfully",
    }).length;

    // Log successful deletion with detailed request information
    logger.projectDeleted({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime,
        2
      ), // 2 DB operations: 1 select + 1 delete
      projectId: property?.id,
      statusCode: 200,
      metadata: {
        projectSlug: slug,
        title: property?.title || "unknown",
        category: property?.category || "unknown",
        location: property?.location || "unknown",
      },
    });

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      logger.errorWithStack(
        {
          action: "project_delete_error",
          ...requestContext,
          error: "Error deleting property",
          statusCode: 500,
          metadata: { projectSlug: slug },
        },
        error
      );
    } else {
      logger.error({
        action: "project_delete_error",
        ...requestContext,
        error: "Error deleting property",
        statusCode: 500,
        metadata: { projectSlug: slug },
      });
    }

    return NextResponse.json(
      { error: "Failed to delete property" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
