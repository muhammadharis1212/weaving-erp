import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ItemEntity {
  @ApiProperty()
  item_name: string;

  @ApiProperty()
  item_sku: string;

  @ApiProperty()
  item_type: string;

  @ApiPropertyOptional()
  item_unit_name: string;

  @ApiProperty()
  item_SalePrice: number;

  @ApiProperty()
  item_SaleAccId: number;

  @ApiProperty()
  item_CostPrice: number;

  @ApiProperty()
  item_CostAccId: number;
}
