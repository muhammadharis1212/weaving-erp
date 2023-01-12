import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteVendorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
