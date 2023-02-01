/*
  Warnings:

  - You are about to drop the column `email` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "addressLine1" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Party" ADD COLUMN     "email" TEXT;
