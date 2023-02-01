/*
  Warnings:

  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyRoleId", "id");
