import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";

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

    // Revalidate all projects pages after deleting a property
    revalidateTag("projects");

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Failed to delete property" },
      { status: 500 }
    );
  }
}
