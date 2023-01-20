-- DropIndex
DROP INDEX "ChartOfAccounts_id_key";

-- AlterTable
CREATE SEQUENCE chartofaccounts_id_seq;
ALTER TABLE "ChartOfAccounts" ADD COLUMN     "code" TEXT,
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" SET DEFAULT nextval('chartofaccounts_id_seq');
ALTER SEQUENCE chartofaccounts_id_seq OWNED BY "ChartOfAccounts"."id";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "AccountingPeriod" (
    "id" SERIAL NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,

    CONSTRAINT "AccountingPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "t_date" DATE NOT NULL,
    "entryDate" DATE NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralLedger" (
    "seqId" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "chartAccountId" INTEGER NOT NULL,
    "amount" DECIMAL(20,2) NOT NULL,
    "dcFlag" BIT(1) NOT NULL,

    CONSTRAINT "GeneralLedger_pkey" PRIMARY KEY ("seqId","transactionId")
);

-- CreateIndex
CREATE INDEX "Transaction_t_date_idx" ON "Transaction"("t_date");

-- CreateIndex
CREATE INDEX "GeneralLedger_seqId_transactionId_chartAccountId_idx" ON "GeneralLedger"("seqId", "transactionId", "chartAccountId");

-- AddForeignKey
ALTER TABLE "GeneralLedger" ADD CONSTRAINT "GeneralLedger_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralLedger" ADD CONSTRAINT "GeneralLedger_chartAccountId_fkey" FOREIGN KEY ("chartAccountId") REFERENCES "ChartOfAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
