import { IsString, IsEmail } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  vendorCompanyName: string;

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
