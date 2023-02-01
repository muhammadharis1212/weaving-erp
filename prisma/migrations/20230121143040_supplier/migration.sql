-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "Supplier" (
    "partyRoleId" INTEGER NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("partyRoleId")
);

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_partyRoleId_fkey" FOREIGN KEY ("partyRoleId") REFERENCES "PartyRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
