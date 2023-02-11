import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  item_name: string;

  @IsNotEmpty()
  @IsString()
  item_sku: string;

  @IsNotEmpty()
  @IsString()
  item_type: string;

  @IsString()
  @IsOptional()
  unit_name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 10 })
  salePrice: number;

  @IsNotEmpty()
  @IsNumber()
  saleAccountId: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 10 })
  purchasePrice: number;

  @IsNotEmpty()
  @IsNumber()
  purchaseAccountId: number;

  @IsOptional()
  @IsNumber()
  warehouseId: number;

  @IsOptional()
  @IsNumber()
  openingStock: number;

  @IsOptional()
  @IsNumber()
  openingStockValue: number;
}
