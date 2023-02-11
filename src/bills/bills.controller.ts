import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipAuth } from 'src/auth/constants/constants';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@SkipAuth()
@ApiTags('Bills')
@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post('new')
  create(@Body() createBillDto: CreateBillDto) {
    return this.billsService.create(createBillDto);
  }

  @Get()
  findAll(
    @Query('filter_by') filter_by: string,
    @Query('limit') limit: string,
    @Query('offset') offset: string,
  ) {
    //offset = skip
    //limit = take
    //filter_by
    let value: string;
    let status: string;

    switch (filter_by) {
      case 'Status.All':
        [status, value] = filter_by.split('.');
        break;
      case 'Status.Open':
        [status, value] = filter_by.split('.');
        break;
      case 'Status.Overdue':
        [status, value] = filter_by.split('.');
        break;
      case 'Status.Draft':
        [status, value] = filter_by.split('.');
        break;
      default:
        throw new BadRequestException({
          statusCode: 400,
          message: "Invalid value of 'filter_by' param.",
        });
    }
    console.log(value);
    return this.billsService.findAll({
      filter_by: String(value),
      limit: Number(limit),
      offset: Number(offset),
    });
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
