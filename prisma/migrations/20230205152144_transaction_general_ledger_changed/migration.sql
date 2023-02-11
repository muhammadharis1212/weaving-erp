/*
  Warnings:

  - You are about to drop the column `entryDate` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "entryDate",
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "transacType" DROP NOT NULL;
