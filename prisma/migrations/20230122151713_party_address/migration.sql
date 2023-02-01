/*
  Warnings:

  - You are about to drop the `Individual` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PartyRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PartyRoleType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstName` to the `Party` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Party` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Individual" DROP CONSTRAINT "Individual_partyId_fkey";

-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_partyId_fkey";

-- DropForeignKey
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_partyId_fkey";

-- DropForeignKey
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_partyRoleTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_partyId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_partyRoleTypeId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Party" ADD COLUMN     "comment" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "salutation" TEXT,
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "Individual";

-- DropTable
DROP TABLE "Organization";

-- DropTable
DROP TABLE "PartyRole";

-- DropTable
DROP TABLE "PartyRoleType";

-- DropTable
DROP TABLE "Supplier";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "partyId" INTEGER NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
