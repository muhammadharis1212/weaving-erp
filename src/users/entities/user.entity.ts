/* eslint-disable prettier/prettier */
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({ default: 'UUID' })
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiHideProperty()
  password: string;

  @ApiPropertyOptional({ nullable: true })
  phone: string;

  @ApiPropertyOptional({ nullable: true })
  address: string;

  @ApiPropertyOptional({ nullable: true })
  state: string;

  @ApiPropertyOptional({ nullable: true })
  city: string;

  @ApiPropertyOptional({ nullable: true })
  zipCode: string;

  @ApiPropertyOptional({ nullable: true })
  country: string;
}
