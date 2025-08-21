/*
  Warnings:

  - You are about to drop the column `year` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `focusPoint` on the `property_images` table. All the data in the column will be lost.
  - You are about to drop the column `focusPoint` on the `property_story_chapters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."properties" DROP COLUMN "year";

-- AlterTable
ALTER TABLE "public"."property_images" DROP COLUMN "focusPoint";

-- AlterTable
ALTER TABLE "public"."property_sections" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."property_story_chapters" DROP COLUMN "focusPoint";
