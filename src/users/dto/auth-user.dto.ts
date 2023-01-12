import { Injectable } from '@nestjs/common';
import { Expose, Exclude } from 'class-transformer';
@Injectable()
export class AuthUserDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Expose()
  phone: string;

  @Expose()
  address: string;

  @Expose()
  state: string;

  @Expose()
  city: string;

  @Expose()
  zipCode: string;

  @Expose()
  country: string;
}
