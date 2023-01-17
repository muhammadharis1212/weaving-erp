/*
  Warnings:

  - You are about to drop the column `item_cPrice` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_salePrice` on the `Item` table. All the data in the column will be lost.
  - Added the required column `item_CostPrice` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_SalePrice` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "item_cPrice",
DROP COLUMN "item_salePrice",
ADD COLUMN     "item_CostPrice" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "item_SalePrice" DECIMAL(10,2) NOT NULL;
