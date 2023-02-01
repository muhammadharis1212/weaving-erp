/*
  Warnings:

  - The primary key for the `PartyRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleTypeId` on the `PartyRole` table. All the data in the column will be lost.
  - You are about to drop the `PartyRoleType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoleType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_roleTypeId_fkey";

-- DropForeignKey
ALTER TABLE "PartyRoleType" DROP CONSTRAINT "PartyRoleType_id_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_pkey",
DROP COLUMN "roleTypeId",
ADD CONSTRAINT "PartyRole_pkey" PRIMARY KEY ("id", "partyId");

-- DropTable
DROP TABLE "PartyRoleType";

-- DropTable
DROP TABLE "RoleType";
