-- CreateTable
CREATE TABLE "Item" (
    "item_id" SERIAL NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_sku" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "item_unit" TEXT,
    "item_salePrice" INTEGER NOT NULL,
    "item_saleAcc" TEXT NOT NULL,
    "item_cPrice" INTEGER NOT NULL,
    "item_cAcc" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "ItemUnit" (
    "unit_id" SERIAL NOT NULL,
    "unit_name" TEXT NOT NULL,

    CONSTRAINT "ItemUnit_pkey" PRIMARY KEY ("unit_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemUnit_unit_name_key" ON "ItemUnit"("unit_name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_item_unit_fkey" FOREIGN KEY ("item_unit") REFERENCES "ItemUnit"("unit_name") ON DELETE CASCADE ON UPDATE CASCADE;
