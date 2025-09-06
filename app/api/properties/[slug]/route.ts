import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdminAuth } from "@/lib/auth";
import { logger } from "@/lib/logger";

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
      where: { slug },
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

    const transformedProperty = {
      ...property,
      heroImages: property.heroImages,
      galleryImages: property.galleryImages,
      storyChapters: property.storyChapters,
      sections: property.sections,
    };

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(transformedProperty).length;

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
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const startTime = Date.now();
  const requestContext = logger.extractRequestContext(request);

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

    await prisma.propertyImage.deleteMany({
      where: {
        OR: [{ heroProperty: { slug } }, { galleryProperty: { slug } }],
      },
    });
    await prisma.propertyStoryChapter.deleteMany({
      where: { property: { slug } },
    });
    await prisma.propertySection.deleteMany({ where: { property: { slug } } });

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
        heroImages: {
          create:
            heroImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        galleryImages: {
          create:
            galleryImages?.map((img: any) => ({
              url: img.url,
              description: img.description,
            })) || [],
        },
        storyChapters: {
          create:
            storyChapters?.map((chapter: any) => ({
              title: chapter.title,
              narrative: chapter.narrative,
              image: chapter.image,
              duration: chapter.duration,
            })) || [],
        },
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

    const transformedProperty = {
      ...property,
      heroImages: property.heroImages,
      galleryImages: property.galleryImages,
      storyChapters: property.storyChapters,
      sections: property.sections,
    };

    const processingTime = Date.now() - startTime;
    const responseSize = JSON.stringify(transformedProperty).length;

    logger.projectUpdated({
      ...logger.addResponseDetails(
        requestContext,
        responseSize,
        processingTime,
        4
      ),
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
          metadata: { projectSlug: slug, title: body?.title || "unknown" },
        },
        error
      );
    } else {
      logger.error({
        action: "project_update_error",
        ...requestContext,
        error: "Error updating property",
        statusCode: 500,
        metadata: { projectSlug: slug, title: body?.title || "unknown" },
      });
    }

    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  } finally {
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
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

  try {
    const { slug } = await params;

    // Find the property by slug to get its ID
    const property = await prisma.property.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    // Delete all related data first (due to foreign key constraints)
    await prisma.propertyImage.deleteMany({
      where: {
        OR: [
          { heroPropertyId: property.id },
          { galleryPropertyId: property.id },
        ],
      },
    });

    await prisma.propertyStoryChapter.deleteMany({
      where: { propertyId: property.id },
    });

    await prisma.propertySection.deleteMany({
      where: { propertyId: property.id },
    });

    // Delete the property
    await prisma.property.delete({
      where: { id: property.id },
    });

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Failed to delete property" },
      { status: 500 }
    );
  } finally {
  }
}
