/*
  Warnings:

  - The primary key for the `RootAccType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rType` on the `RootAccType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `RootAccType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `RootAccType` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `rootTypeId` on the `AccountGroup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `id` to the `RootAccType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `RootAccType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AccountGroup" DROP CONSTRAINT "AccountGroup_rootTypeId_fkey";

-- DropIndex
DROP INDEX "RootAccType_rType_idx";

-- DropIndex
DROP INDEX "RootAccType_rType_key";

-- AlterTable
ALTER TABLE "AccountGroup" ADD COLUMN     "description" TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
DROP COLUMN "rootTypeId",
ADD COLUMN     "rootTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "inventoryAccount" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "RootAccType" DROP CONSTRAINT "RootAccType_pkey",
DROP COLUMN "rType",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "RootAccType_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "RootAccType_id_key" ON "RootAccType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RootAccType_name_key" ON "RootAccType"("name");

-- AddForeignKey
ALTER TABLE "AccountGroup" ADD CONSTRAINT "AccountGroup_rootTypeId_fkey" FOREIGN KEY ("rootTypeId") REFERENCES "RootAccType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
