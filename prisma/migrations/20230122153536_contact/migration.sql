-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
