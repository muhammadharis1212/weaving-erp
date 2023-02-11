/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateItemUnitDto } from '../dto/create-itemUnit.dto';
import { ItemUnitsService } from '../services/uom.service';

@ApiTags('Items')
@ApiBearerAuth()
@Controller('/uom')
export class UOMController {
  constructor(private readonly itemUnitService: ItemUnitsService) {}
  @Post('create')
  create(@Body() createItemUnit: CreateItemUnitDto) {
    return this.itemUnitService.create(createItemUnit);
  }
  @Get('all')
  findAllUnits() {
    return this.itemUnitService.findAll();
  }
}
