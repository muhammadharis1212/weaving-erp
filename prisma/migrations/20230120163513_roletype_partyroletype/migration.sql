-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "RoleType" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "RoleType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyRoleType" (
    "id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PartyRoleType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartyRoleType" ADD CONSTRAINT "PartyRoleType_id_fkey" FOREIGN KEY ("id") REFERENCES "RoleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
