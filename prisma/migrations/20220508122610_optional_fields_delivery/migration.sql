-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `delivery_id_deliveryman_fkey`;

-- AlterTable
ALTER TABLE `delivery` MODIFY `id_deliveryman` VARCHAR(191) NULL,
    MODIFY `end_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `delivery` ADD CONSTRAINT `delivery_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
