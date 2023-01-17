/*
  Warnings:

  - You are about to drop the column `item_cAcc` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_saleAcc` on the `Item` table. All the data in the column will be lost.
  - Added the required column `item_CostAccId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_SaleAccId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "item_cAcc",
DROP COLUMN "item_saleAcc",
ADD COLUMN     "item_CostAccId" INTEGER NOT NULL,
ADD COLUMN     "item_SaleAccId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_item_SaleAccId_fkey" FOREIGN KEY ("item_SaleAccId") REFERENCES "ChartOfAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_item_CostAccId_fkey" FOREIGN KEY ("item_CostAccId") REFERENCES "ChartOfAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
