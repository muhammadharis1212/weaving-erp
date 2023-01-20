import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateChartOfAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  accountNo: string;

  @IsNotEmpty()
  @IsNumber()
  accountGroupId: number;
}
