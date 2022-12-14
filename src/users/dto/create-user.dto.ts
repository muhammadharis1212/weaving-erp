import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  phone: string;
  @IsString()
  companyName: string;
  @IsString()
  addressLine1: string;
  @IsString()
  addressLine2: string;
  @IsString()
  state: string;
  @IsString()
  city: string;
  @IsString()
  postal: string;
}
