import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}
  create(createItemDto: CreateItemDto) {
    // const {
    //   item_name,
    //   item_sku,
    //   item_type,
    //   item_unit_name,
    //   item_CostPrice,
    //   item_SalePrice,
    //   item_SaleAccId,
    //   item_CostAccId,
    // } = createItemDto;
    // return this.prisma.item.create({
    //   data: {
    //     item_name,
    //     item_sku,
    //     item_type,
    //     item_unit_name,
    //     item_CostPrice,
    //     item_SalePrice,
    //     item_SaleAccId,
    //     item_CostAccId,
    //   },
    // });
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({ where: { item_id: id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
