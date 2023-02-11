/*
  Warnings:

  - The primary key for the `GeneralLedger` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `seqId` on the `GeneralLedger` table. All the data in the column will be lost.
  - You are about to drop the `TransactionDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TransactionDetail" DROP CONSTRAINT "TransactionDetail_transactionId_fkey";

-- DropIndex
DROP INDEX "GeneralLedger_seqId_transactionId_chartAccountId_idx";

-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "outStandingAmount" DECIMAL(30,2) NOT NULL DEFAULT 0,
ADD COLUMN     "subTotal" DECIMAL(30,2) NOT NULL DEFAULT 0,
ADD COLUMN     "total" DECIMAL(30,2) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GeneralLedger" DROP CONSTRAINT "GeneralLedger_pkey",
DROP COLUMN "seqId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GeneralLedger_pkey" PRIMARY KEY ("id", "transactionId");

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- DropTable
DROP TABLE "TransactionDetail";

-- CreateIndex
CREATE INDEX "GeneralLedger_id_transactionId_chartAccountId_idx" ON "GeneralLedger"("id", "transactionId", "chartAccountId");
