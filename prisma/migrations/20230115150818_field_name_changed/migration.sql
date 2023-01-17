/*
  Warnings:

  - You are about to drop the column `item_unit` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_item_unit_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "item_unit",
ADD COLUMN     "item_unit_name" TEXT;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_item_unit_name_fkey" FOREIGN KEY ("item_unit_name") REFERENCES "ItemUnit"("unit_name") ON DELETE CASCADE ON UPDATE CASCADE;
