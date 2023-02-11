-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "discontinueDate" DROP NOT NULL,
ALTER COLUMN "inventoryAccountId" SET DEFAULT 3;
