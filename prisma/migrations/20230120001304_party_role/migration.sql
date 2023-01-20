-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "PartyRole" (
    "id" SERIAL NOT NULL,
    "fromDate" TIMESTAMP(3),
    "thruDate" TIMESTAMP(3),
    "partyId" INTEGER NOT NULL,

    CONSTRAINT "PartyRole_pkey" PRIMARY KEY ("id","partyId")
);

-- AddForeignKey
ALTER TABLE "PartyRole" ADD CONSTRAINT "PartyRole_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
