import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkipAuth } from 'src/auth/constants/constants';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@SkipAuth()
@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post('new')
  create(@Body() createBillDto: CreateBillDto) {
    return this.billsService.create(createBillDto);
  }

  @Get()
  findAll() {
    return this.billsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billsService.update(+id, updateBillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billsService.remove(+id);
  }
}
