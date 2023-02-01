/*
  Warnings:

  - You are about to drop the column `partyRoleId` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `partyRolePartyId` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `partyRolePartyRoleTypeId` on the `Supplier` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_partyRoleId_partyRolePartyId_partyRolePartyRoleTy_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "partyRoleId",
DROP COLUMN "partyRolePartyId",
DROP COLUMN "partyRolePartyRoleTypeId";
