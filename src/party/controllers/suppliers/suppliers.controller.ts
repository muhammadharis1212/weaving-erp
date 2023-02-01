import { Controller, Get, Query } from '@nestjs/common';
import { SkipAuth } from 'src/auth/constants/constants';
import { PartyService } from 'src/party/party.service';

@SkipAuth()
@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly partyService: PartyService) {}
  @Get()
  findSuppliers(@Query('role') supplier: string) {
    console.log(supplier);

    return this.partyService.findAllSuppliers(supplier);
  }
}
