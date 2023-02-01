/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `PartyRole` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "Supplier" (
    "partyRoleId" INTEGER NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyRoleId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "partyRoleId" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("partyRoleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_partyRoleId_key" ON "Supplier"("partyRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_partyRoleId_key" ON "Customer"("partyRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "PartyRole_id_key" ON "PartyRole"("id");

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_partyRoleId_fkey" FOREIGN KEY ("partyRoleId") REFERENCES "PartyRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_partyRoleId_fkey" FOREIGN KEY ("partyRoleId") REFERENCES "PartyRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
