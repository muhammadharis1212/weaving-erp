/*
  Warnings:

  - The primary key for the `Individual` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Individual` table. All the data in the column will be lost.
  - The primary key for the `Organization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Organization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Individual" DROP CONSTRAINT "Individual_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Individual_pkey" PRIMARY KEY ("partyId");

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Organization_pkey" PRIMARY KEY ("partyId");
