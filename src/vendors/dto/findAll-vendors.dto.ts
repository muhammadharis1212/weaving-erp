import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllVendorsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  companyId: string;
}
