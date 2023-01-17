/*
  Warnings:

  - Made the column `item_salePrice` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `item_saleAcc` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `item_cPrice` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `item_cAcc` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "item_salePrice" SET NOT NULL,
ALTER COLUMN "item_saleAcc" SET NOT NULL,
ALTER COLUMN "item_cPrice" SET NOT NULL,
ALTER COLUMN "item_cAcc" SET NOT NULL;
