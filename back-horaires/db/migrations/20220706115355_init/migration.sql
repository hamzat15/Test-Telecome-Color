-- CreateTable
CREATE TABLE `horaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fuseau` VARCHAR(191) NOT NULL,
    `jours` VARCHAR(191) NOT NULL,
    `horaire` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
