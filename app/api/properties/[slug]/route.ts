import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

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
