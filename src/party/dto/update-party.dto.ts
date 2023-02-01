import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdatePartyDto {
  @IsOptional()
  @IsString()
  salutation: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  comment: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type: string;

  @ValidateNested({ each: true })
  @Type(() => Address)
  address: Address[];

  @ValidateNested({ each: true })
  @Type(() => Contact)
  contact: Contact[];
}

export class Address {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  addressLine1: string;

  @IsOptional()
  @IsString()
  addressLine2: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  postalCode: string;
}
class Contact {
  @IsNumber()
  id: number;

  @IsNumberString()
  @IsOptional()
  phone: string;
}
