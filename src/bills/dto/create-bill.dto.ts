import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBillDto {
  @IsNotEmpty()
  @IsNumber()
  supplierId: number;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsDate()
  billDate: Date;

  @IsOptional()
  @IsDate()
  billDueDate: Date;

  @IsString()
  @IsNotEmpty()
  billNo: string;

  @IsNumber()
  @IsNotEmpty()
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
}
