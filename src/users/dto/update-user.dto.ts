import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Expose, Exclude } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @Expose()
  name: string;
  @IsEmail()
  @Exclude()
  email: string;
  @IsString()
  @Exclude()
  password: string;
  @IsString()
  @Expose()
  phone: string;
  @IsString()
  @Expose()
  companyName: string;
  @IsString()
  @Expose()
  addressLine1: string;
  @IsString()
  @Expose()
  addressLine2: string;
  @IsString()
  @Expose()
  state: string;
  @IsString()
  @Expose()
  city: string;
  @IsString()
  @Expose()
  postal: string;
}
