import { PrismaClient } from "../app/generated/prisma";
import { properties } from "../app/lib/properties";

const prisma = new PrismaClient();

/**
 * Seed the database with property data from the imported dataset.
 *
 * Clears existing property-related records (propertySection, propertyStoryChapter, propertyImage, and property)
 * and then creates Property records for each entry in the `properties` array, including nested relations:
 * heroImages, galleryImages, storyChapters, and sections.
 *
 * Uses the Prisma client to perform the deletions and nested create operations.
 */
async function main() {
  console.log("🌱 Starting to seed the database...");

  // Clear existing data (optional - remove if you want to keep existing data)
  console.log("🧹 Clearing existing data...");
  await prisma.propertySection.deleteMany();
  await prisma.propertyStoryChapter.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();

  console.log("📊 Creating properties...");

  for (const property of properties) {
    console.log(`Creating property: ${property.title}`);

    const createdProperty = await prisma.property.create({
      data: {
        slug: property.slug,
        title: property.title,
        description: property.description || null,
        fullDescription: property.fullDescription || null,
        address: property.address || null,
        price: property.price || null,
        bedrooms: property.bedrooms || null,
        bathrooms: property.bathrooms || null,
        area: property.area || null,
        yearBuilt: property.yearBuilt || null,
        features: property.features || [],
        category: property.category,
        location: property.location || null,

        image: property.image,
        tags: property.tags || [],

        // Create hero images
        heroImages: {
          create: property.heroImages.map((image) => ({
            url: image.url,
            description: image.description || null,
          })),
        },

        // Create gallery images
        galleryImages: {
          create: property.galleryImages.map((image) => ({
            url: image.url,
            description: image.description || null,
          })),
        },

        // Create story chapters
        storyChapters: {
          create: property.storyChapters.map((chapter) => ({
            title: chapter.title,
            narrative: chapter.narrative,
            image: chapter.image,
            duration: chapter.duration,
          })),
        },

        // Create sections
        sections: {
          create: property.sections.map((section) => ({
            title: section.title,
            content: section.content,
            images: section.images,
          })),
        },
      },
      include: {
        heroImages: true,
        galleryImages: true,
        storyChapters: true,
        sections: true,
      },
    });

    console.log(
      `✅ Created property: ${createdProperty.title} with ${createdProperty.heroImages.length} hero images, ${createdProperty.galleryImages.length} gallery images, ${createdProperty.storyChapters.length} story chapters, and ${createdProperty.sections.length} sections`
    );
  }

  console.log(`🎉 Seeding completed! Created ${properties.length} properties.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
