/*
  Warnings:

  - Added the required column `isOnline` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastActive` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `isOnline` BOOLEAN NOT NULL,
    ADD COLUMN `lastActive` DATETIME(3) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;
