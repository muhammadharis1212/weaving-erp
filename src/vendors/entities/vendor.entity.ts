import { ApiProperty } from '@nestjs/swagger';

export class VendorEntity {
  @ApiProperty({ nullable: false })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zipCode: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  taxNo: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: false })
  companyId: string;
}
