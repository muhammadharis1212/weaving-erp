import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ItemEntity } from './entities/item.entity';

@ApiTags('Items')
@ApiBearerAuth()
@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiOkResponse({ status: 201, type: ItemEntity })
  @Post('new')
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @ApiOkResponse({ status: 200, type: ItemEntity, isArray: true })
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @ApiOkResponse({ status: 200, type: ItemEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
