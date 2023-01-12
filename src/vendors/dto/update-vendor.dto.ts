import { ApiHideProperty, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { CreateVendorDto } from './create-vendor.dto';

export class UpdateVendorDto extends PartialType(CreateVendorDto) {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiHideProperty()
  @Exclude()
  companyId: string;
}
