/*
  Warnings:

  - You are about to drop the `BillItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BillItem" DROP CONSTRAINT "BillItem_billId_fkey";

-- DropForeignKey
ALTER TABLE "BillItem" DROP CONSTRAINT "BillItem_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- DropTable
DROP TABLE "BillItem";

-- CreateTable
CREATE TABLE "BillItems" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "rate" DECIMAL NOT NULL,

    CONSTRAINT "BillItems_pkey" PRIMARY KEY ("id","itemId")
);

-- AddForeignKey
ALTER TABLE "BillItems" ADD CONSTRAINT "BillItems_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillItems" ADD CONSTRAINT "BillItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
