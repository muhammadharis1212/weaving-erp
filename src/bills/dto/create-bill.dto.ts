import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsDecimal,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateBillDto {
  @IsNotEmpty()
  @IsNumber()
  supplierId: number;

  @IsOptional()
  @IsString()
  status: string;

  @IsISO8601()
  @IsNotEmpty()
  billDate: Date;

  @IsOptional()
  @IsDateString()
  billDueDate: Date;

  @IsString()
  @IsNotEmpty()
  billNo: string;

  @IsNumber()
  @IsOptional()
  paymentTerms: number;

  @IsString()
  @IsOptional()
  paymentTermsLabel: string;

  @IsString()
  @IsOptional()
  dueByDays: string;

  @IsNumber()
  @IsOptional()
  dueInDays: number;

  // @IsString()
  // @IsOptional()
  // notes: string;

  @ValidateNested({ each: true })
  @Type(() => BillItems)
  billItems: BillItems[];
}

class BillItems {
  @IsNotEmpty()
  @IsNumber()
  itemId: number;

  @IsString()
  @IsOptional()
  name: string;
  // "account_id": "460000000000403",

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 10 })
  rate: number;

  //"warehouse_id": 460000000038089,

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 10 })
  quantity: number;

  //item_order:

  @IsOptional()
  @IsString()
  //denotes wether a product is goods or service.
  productType: string;

  //"unit": "kgs",
}
