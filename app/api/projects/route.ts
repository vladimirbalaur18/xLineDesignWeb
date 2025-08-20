import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch only the minimal fields needed for projects page
    const projects = await prisma.property.findMany({
      select: {
        slug: true,
        title: true,
        description: true,
        category: true,
        location: true,
        yearBuilt: true,
        image: true,
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
