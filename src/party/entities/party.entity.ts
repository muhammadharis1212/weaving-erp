import { Type } from 'class-transformer';

export class Party {
  id: number;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
  role: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  @Type(() => Address)
  address: Address[];
  @Type(() => Contact)
  contact: Contact[];
}
class Address {
  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  createdAt: string;
  updatedAt: string;
}
class Contact {
  phone: string;
}
