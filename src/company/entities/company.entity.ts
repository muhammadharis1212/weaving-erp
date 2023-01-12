import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CompanyEntity {
  @ApiProperty({ default: 'UUID' })
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  email: string;

  @ApiProperty({ nullable: true })
  address: string;

  @ApiProperty({ nullable: true })
  phone: string;

  @ApiProperty({ nullable: true })
  state: string;

  @ApiProperty({ nullable: true })
  city: string;

  @ApiProperty({ nullable: true })
  zipCode: string;

  @ApiProperty({ nullable: true })
  country: string;

  @ApiProperty({ nullable: true })
  taxNo: string;
}
