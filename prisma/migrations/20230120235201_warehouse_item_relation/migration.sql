/*
  Warnings:

  - You are about to drop the column `itemId` on the `Warehouse` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Warehouse" DROP CONSTRAINT "Warehouse_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "warehouseId" INTEGER,
ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Warehouse" DROP COLUMN "itemId";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
