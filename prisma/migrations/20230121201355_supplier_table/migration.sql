/*
  Warnings:

  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `partyRoleTypeId` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
ADD COLUMN     "partyRoleTypeId" INTEGER NOT NULL,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyRoleId", "partyId", "partyRoleTypeId");

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_partyRoleTypeId_fkey" FOREIGN KEY ("partyRoleTypeId") REFERENCES "PartyRoleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
