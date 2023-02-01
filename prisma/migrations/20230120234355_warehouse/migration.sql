/*
  Warnings:

  - Made the column `itemId` on table `Warehouse` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Warehouse" ALTER COLUMN "itemId" SET NOT NULL;
