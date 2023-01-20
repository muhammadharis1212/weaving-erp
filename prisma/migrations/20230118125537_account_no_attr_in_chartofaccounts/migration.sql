-- AlterTable
ALTER TABLE "ChartOfAccounts" ADD COLUMN     "accountNo" TEXT;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "AccountBalance" (
    "id" SERIAL NOT NULL,
    "charAccountId" INTEGER NOT NULL,
    "companyId" TEXT NOT NULL,
    "monthId" INTEGER NOT NULL,
    "acctgPeriodId" INTEGER NOT NULL,

    CONSTRAINT "AccountBalance_pkey" PRIMARY KEY ("id")
);
