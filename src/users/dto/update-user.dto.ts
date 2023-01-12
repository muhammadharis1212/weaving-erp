import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumberString, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name?: string;
  @IsNumberString()
  phone?: string;
  @IsString()
  address?: string;
  @IsString()
  state?: string;
  @IsString()
  city?: string;
  @IsString()
  zipCode?: string;
  @IsString()
  country?: string;
}
