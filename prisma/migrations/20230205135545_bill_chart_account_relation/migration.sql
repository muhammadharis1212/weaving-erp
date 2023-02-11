-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "accountPayableId" INTEGER;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_accountPayableId_fkey" FOREIGN KEY ("accountPayableId") REFERENCES "ChartOfAccounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
