/*
  Warnings:

  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_partyRoleId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
ADD COLUMN     "partyRolePartyId" INTEGER,
ADD COLUMN     "partyRolePartyRoleTypeId" INTEGER,
ALTER COLUMN "partyRoleId" DROP NOT NULL,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyId", "partyRoleTypeId");

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_partyRoleId_partyRolePartyId_partyRolePartyRoleTy_fkey" FOREIGN KEY ("partyRoleId", "partyRolePartyId", "partyRolePartyRoleTypeId") REFERENCES "PartyRole"("id", "partyId", "partyRoleTypeId") ON DELETE SET NULL ON UPDATE CASCADE;
