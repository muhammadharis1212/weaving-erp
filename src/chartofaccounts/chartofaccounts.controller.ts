import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ChartofaccountsService } from './chartofaccounts.service';
import { CreateChartOfAccountDto } from './dto/create-chartofaccount.dto';
import { UpdateChartofaccountDto } from './dto/update-chartofaccount.dto';

@ApiTags('Chart Of Accounts')
@ApiBearerAuth()
@Controller('chartofaccounts')
export class ChartofaccountsController {
  constructor(
    private readonly chartofaccountsService: ChartofaccountsService,
  ) {}

  @Post('create')
  create(@Body() createChartOfAccountDto: CreateChartOfAccountDto) {
    return this.chartofaccountsService.create(createChartOfAccountDto);
  }

  @Get()
  findAll() {
    return this.chartofaccountsService.findAll();
  }
  @Get('groups')
  groups() {
    return this.chartofaccountsService.findAllGroups();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartofaccountsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChartofaccountDto: UpdateChartofaccountDto,
  ) {
    return this.chartofaccountsService.update(+id, updateChartofaccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartofaccountsService.remove(+id);
  }
}
