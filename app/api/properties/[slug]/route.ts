import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

/**
 * Deletes a property (and its dependent records) identified by the route `slug`.
 *
 * Looks up the property by slug, deletes related records that depend on the property
 * (images where the property is referenced as a hero or gallery item, story chapters,
 * and sections) to satisfy foreign-key constraints, then deletes the property itself.
 *
 * @param params - A promise resolving to an object with `slug` (the property identifier from the route)
 * @returns A JSON HTTP response:
 * - 200 with `{ message: "Property deleted successfully" }` on success
 * - 404 with `{ error: "Property not found" }` if no property matches the slug
 * - 500 with `{ error: "Failed to delete property" }` on unexpected errors
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
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
    await prisma.$disconnect();
  }
}
