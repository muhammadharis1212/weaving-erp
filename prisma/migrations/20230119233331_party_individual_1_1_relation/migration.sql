/*
  Warnings:

  - A unique constraint covering the columns `[partyId]` on the table `Individual` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partyId` to the `Individual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Individual" ADD COLUMN     "partyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Party" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Individual_partyId_key" ON "Individual"("partyId");

-- AddForeignKey
ALTER TABLE "Individual" ADD CONSTRAINT "Individual_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
