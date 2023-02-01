/*
  Warnings:

  - Added the required column `discontinueDate` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "discontinueDate" DATE NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "CategoriesOnItems" (
    "itemId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoriesOnItems_pkey" PRIMARY KEY ("itemId","categoryId")
);

-- CreateTable
CREATE TABLE "ItemCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "itemId" INTEGER,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoriesOnItems" ADD CONSTRAINT "CategoriesOnItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnItems" ADD CONSTRAINT "CategoriesOnItems_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ItemCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Warehouse" ADD CONSTRAINT "Warehouse_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
