/*
  Warnings:

  - A unique constraint covering the columns `[partyId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partyId` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "partyId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_partyId_key" ON "Organization"("partyId");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
