/*
  Warnings:

  - You are about to alter the column `item_salePrice` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - You are about to alter the column `item_cPrice` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "item_salePrice" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "item_cPrice" SET DATA TYPE DECIMAL(10,2);
