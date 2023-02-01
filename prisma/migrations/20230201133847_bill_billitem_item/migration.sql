-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "BillItem" (
    "id" SERIAL NOT NULL,
    "billId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "rate" DECIMAL NOT NULL,

    CONSTRAINT "BillItem_pkey" PRIMARY KEY ("id","itemId")
);

-- AddForeignKey
ALTER TABLE "BillItem" ADD CONSTRAINT "BillItem_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillItem" ADD CONSTRAINT "BillItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
