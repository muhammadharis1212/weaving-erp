-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "billDate" DATE,
    "billDueDate" DATE,
    "billNo" TEXT NOT NULL,
    "paymentTerms" INTEGER NOT NULL DEFAULT 0,
    "paymentTermsLabel" TEXT,
    "dueByDays" TEXT,
    "dueInDays" INTEGER,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
