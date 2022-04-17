/*
  Warnings:

  - You are about to drop the column `catagoryId` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the `PodcastCatagory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Podcast` DROP COLUMN `catagoryId`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `PodcastCatagory`;

-- CreateTable
CREATE TABLE `PodcastCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `googlePodcastUrl` VARCHAR(191) NULL,
    `spotifyUrl` VARCHAR(191) NULL,
    `youtubeUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
