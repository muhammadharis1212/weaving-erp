import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePartyDto {
  @IsOptional()
  @IsString()
  salutation: string;

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

  @IsString()
  @IsNotEmpty()
  role: string;

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
  @IsNumberString()
  @IsOptional()
  phone: string;
}
