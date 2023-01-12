/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemUnitDto } from '../dto/create-itemUnit.dto';

@Injectable()
export class ItemUnitsService {
  constructor(private prisma: PrismaService) {}
  create(createUnitDto: CreateItemUnitDto) {
    const { unit_name } = createUnitDto;
    const lowerCase = unit_name?.toLowerCase();
    return this.prisma.itemUnit.create({ data: { unit_name: lowerCase } });
  }
  async findAll() {
    console.log('FindAll');
    return await this.prisma.itemUnit.findMany({
      orderBy: [{ unit_name: 'asc' }],
    });
  }
}
