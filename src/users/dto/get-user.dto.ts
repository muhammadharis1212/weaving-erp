import { Injectable } from '@nestjs/common';
import { Expose, Exclude } from 'class-transformer';
@Injectable()
export class GetUserDto {
  @Exclude()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Expose()
  phone: string;

  @Expose()
  companyName: string;

  @Expose()
  addressLine1: string;

  @Expose()
  addressLine2: string;

  @Expose()
  state: string;

  @Expose()
  city: string;

  @Expose()
  postal: string;
}
