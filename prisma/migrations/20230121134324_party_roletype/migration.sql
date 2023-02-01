/*
  Warnings:

  - The primary key for the `PartyRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[partyRoleTypeId]` on the table `PartyRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partyRoleTypeId` to the `PartyRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_partyRoleId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_partyRoleId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_pkey",
ADD COLUMN     "partyRoleTypeId" INTEGER NOT NULL,
ADD CONSTRAINT "PartyRole_pkey" PRIMARY KEY ("id", "partyId", "partyRoleTypeId");

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Supplier";

-- CreateTable
CREATE TABLE "PartyRoleType" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PartyRoleType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PartyRole_partyRoleTypeId_key" ON "PartyRole"("partyRoleTypeId");

-- AddForeignKey
ALTER TABLE "PartyRole" ADD CONSTRAINT "PartyRole_partyRoleTypeId_fkey" FOREIGN KEY ("partyRoleTypeId") REFERENCES "PartyRoleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
