/*
  Warnings:

  - You are about to drop the column `inventoryAccount` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_CostAccId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_CostPrice` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_SaleAccId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_SalePrice` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_unit_name` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `ItemUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_inventoryAccount_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_item_CostAccId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_item_SaleAccId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_item_unit_name_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "inventoryAccount",
DROP COLUMN "item_CostAccId",
DROP COLUMN "item_CostPrice",
DROP COLUMN "item_SaleAccId",
DROP COLUMN "item_SalePrice",
DROP COLUMN "item_unit_name",
ADD COLUMN     "inventoryAccountId" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "openingStock" DECIMAL(65,30),
ADD COLUMN     "openingStockValue" DECIMAL(65,30),
ADD COLUMN     "purchaseAccountId" INTEGER,
ADD COLUMN     "purchasePrice" DECIMAL(65,30),
ADD COLUMN     "saleAccountId" INTEGER,
ADD COLUMN     "salePrice" DECIMAL(65,30),
ADD COLUMN     "unit_name" TEXT;

-- DropTable
DROP TABLE "ItemUnit";

-- CreateTable
CREATE TABLE "UOM" (
    "unit_id" SERIAL NOT NULL,
    "unit_name" TEXT NOT NULL,

    CONSTRAINT "UOM_pkey" PRIMARY KEY ("unit_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UOM_unit_name_key" ON "UOM"("unit_name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_unit_name_fkey" FOREIGN KEY ("unit_name") REFERENCES "UOM"("unit_name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_saleAccountId_fkey" FOREIGN KEY ("saleAccountId") REFERENCES "ChartOfAccounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_purchaseAccountId_fkey" FOREIGN KEY ("purchaseAccountId") REFERENCES "ChartOfAccounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inventoryAccountId_fkey" FOREIGN KEY ("inventoryAccountId") REFERENCES "ChartOfAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
