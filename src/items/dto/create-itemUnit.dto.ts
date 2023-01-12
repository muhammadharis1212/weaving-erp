/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItemUnitDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  unit_name: string;
}
