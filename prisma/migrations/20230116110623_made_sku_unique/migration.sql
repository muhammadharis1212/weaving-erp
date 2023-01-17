/*
  Warnings:

  - A unique constraint covering the columns `[item_sku]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_item_sku_key" ON "Item"("item_sku");
