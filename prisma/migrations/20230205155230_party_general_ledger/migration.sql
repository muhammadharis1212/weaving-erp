/*
  Warnings:

  - You are about to drop the column `partyId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `partyId` to the `GeneralLedger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_partyId_fkey";

-- AlterTable
ALTER TABLE "GeneralLedger" ADD COLUMN     "partyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "partyId";

-- AddForeignKey
ALTER TABLE "GeneralLedger" ADD CONSTRAINT "GeneralLedger_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
