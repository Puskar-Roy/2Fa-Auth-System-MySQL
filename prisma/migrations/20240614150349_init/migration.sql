/*
  Warnings:

  - You are about to drop the column `expireTime` on the `otp` table. All the data in the column will be lost.
  - Added the required column `expireAt` to the `OTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `otp` DROP COLUMN `expireTime`,
    ADD COLUMN `expireAt` DATETIME(3) NOT NULL;
