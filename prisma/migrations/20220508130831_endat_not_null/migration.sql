/*
  Warnings:

  - Made the column `end_at` on table `delivery` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `delivery` MODIFY `end_at` DATETIME(3) NOT NULL;
