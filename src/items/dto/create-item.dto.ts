import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
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
  item_unit_name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(9999999999.99)
  item_SalePrice: number;

  @IsNotEmpty()
  @IsNumber()
  item_SaleAccId: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(9999999999.99)
  item_CostPrice: number;

  @IsNotEmpty()
  @IsNumber()
  item_CostAccId: number;
}
