/*
  Warnings:

  - The primary key for the `PartyRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `roleTypeId` to the `PartyRole` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "PartyRole" DROP CONSTRAINT "PartyRole_pkey",
ADD COLUMN     "roleTypeId" INTEGER NOT NULL,
ADD CONSTRAINT "PartyRole_pkey" PRIMARY KEY ("id", "partyId", "roleTypeId");

-- AddForeignKey
ALTER TABLE "PartyRole" ADD CONSTRAINT "PartyRole_roleTypeId_fkey" FOREIGN KEY ("roleTypeId") REFERENCES "RoleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
