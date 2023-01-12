/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

class BearerUser {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  address: string | null;

  @ApiProperty()
  state: string | null;

  @ApiProperty()
  city: string | null;

  @ApiProperty()
  zipCode: string | null;

  @ApiProperty()
  country: string | null;
}
class BearerCompany {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string | null;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  address: string | null;

  @ApiProperty()
  state: string | null;

  @ApiProperty()
  city: string | null;

  @ApiProperty()
  zipCode: string | null;

  @ApiProperty()
  country: string | null;
}
export class AuthLoginEntity {
  @ApiProperty()
  access_token: string;
  user: BearerUser;
  company: BearerCompany;
}
