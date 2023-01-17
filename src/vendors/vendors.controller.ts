import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Options,
  Query,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ApiTags, ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { VendorEntity } from './entities/vendor.entity';
import { DeleteVendorDto } from './dto/delete-vendor.dto';
import { CurrentAuthUser } from 'src/users/decorators/current-auth-user.decorator';

@ApiTags('Vendors')
@ApiBearerAuth()
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post('create')
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(createVendorDto);
  }

  @ApiOkResponse({ type: VendorEntity, isArray: true })
  @Get()
  findAll(@CurrentAuthUser('companyId') companyId: string) {
    return this.vendorsService.findAll(companyId);
  }

  @ApiOkResponse({ type: VendorEntity })
  @Get(':vendorId')
  findOne(@Param('vendorId', ParseIntPipe) vendorId: number) {
    return this.vendorsService.findOne(vendorId);
  }

  @Patch(':id/update')
  update(@Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(updateVendorDto);
  }
  @Delete()
  remove(@Body() deleteVendorDto: DeleteVendorDto) {
    return this.vendorsService.remove(deleteVendorDto);
  }
}
