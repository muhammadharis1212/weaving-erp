/*
  Warnings:

  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Supplier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[partyId]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partyId` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
DROP COLUMN "id",
ADD COLUMN     "partyId" INTEGER NOT NULL,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyRoleId", "partyId");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_partyId_key" ON "Supplier"("partyId");

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
