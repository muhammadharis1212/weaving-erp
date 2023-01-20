import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChartOfAccountDto } from './dto/create-chartofaccount.dto';
import { UpdateChartofaccountDto } from './dto/update-chartofaccount.dto';

@Injectable()
export class ChartofaccountsService {
  constructor(private prisma: PrismaService) {}
  create(createChartOfAccountDto: CreateChartOfAccountDto) {
    return this.prisma.chartOfAccounts.create({
      data: { ...createChartOfAccountDto },
    });
  }

  findAll() {
    return this.prisma.chartOfAccounts.findMany({
      include: { group: { include: { rootType: true } } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} chartofaccount`;
  }

  update(id: number, updateChartofaccountDto: UpdateChartofaccountDto) {
    return `This action updates a #${id} chartofaccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartofaccount`;
  }
  async findAllGroups() {
    return await this.prisma.accountGroup.findMany({
      include: { rootType: true },
    });
  }
}
