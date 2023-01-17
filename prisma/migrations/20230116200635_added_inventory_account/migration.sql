-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "inventoryAccount" INTEGER NOT NULL DEFAULT 3;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inventoryAccount_fkey" FOREIGN KEY ("inventoryAccount") REFERENCES "ChartOfAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
