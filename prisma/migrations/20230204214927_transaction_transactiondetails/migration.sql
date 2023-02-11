/*
  Warnings:

  - You are about to drop the column `t_date` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `billId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partyId` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transacDate` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transacType` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaction_t_date_idx";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "t_date",
ADD COLUMN     "billId" INTEGER NOT NULL,
ADD COLUMN     "partyId" INTEGER NOT NULL,
ADD COLUMN     "transacDate" DATE NOT NULL,
ADD COLUMN     "transacType" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TransactionDetail" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(20,2) NOT NULL,
    "dcFlag" BIT(1) NOT NULL,
    "transactionId" INTEGER NOT NULL,

    CONSTRAINT "TransactionDetail_pkey" PRIMARY KEY ("id","transactionId")
);

-- CreateIndex
CREATE INDEX "Transaction_transacDate_idx" ON "Transaction"("transacDate");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionDetail" ADD CONSTRAINT "TransactionDetail_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
