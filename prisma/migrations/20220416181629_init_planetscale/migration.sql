-- CreateTable
CREATE TABLE `PodcastCatagory` (
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

-- CreateTable
CREATE TABLE `Podcast` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `googlePodcastUrl` VARCHAR(191) NULL,
    `spotifyUrl` VARCHAR(191) NULL,
    `youtubeUrl` VARCHAR(191) NULL,
    `catagoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
