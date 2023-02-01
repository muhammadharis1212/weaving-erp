import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}
  create(createBillDto: CreateBillDto) {
    return this.prisma.bill.create({ data: { ...createBillDto } });
  }

  findAll() {
    return `This action returns all bills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bill`;
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
