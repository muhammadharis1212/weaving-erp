import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Bill } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}
  async create(createBillDto: CreateBillDto) {
    //billItems is array of items inside the bill object
    const { billItems, ...billDto } = createBillDto;
    const subTotal = billItems.reduce((total, currentValue) => {
      const amount = currentValue.quantity * currentValue.rate;
      console.log(amount);
      return total + amount;
    }, 0);

    console.log(subTotal);
    //TODO
    //equation for implementing discount feature in the future
    const total = subTotal;
    if (billDto.status === 'Open') {
      const accountPayable = await this.prisma.chartOfAccounts.findUnique({
        where: { name: 'accounts payable' },
      });
      console.log('accountsPayable : ', accountPayable);
      return this.prisma.bill.create({
        data: {
          ...billDto,
          subTotal,
          total,
          outStandingAmount: total,
          BillItems: { create: billItems },
          transaction: {
            create: {
              transacDate: billDto.billDate,
              description: 'Bill Against items',
              transacType: 'Bill',
              generalLedger: {
                create: {
                  amount: total,
                  dcFlag: '1',
                  //account:{connect:{name: 'accounts payable'}},
                  chartAccountId: accountPayable.id,
                  partyId: billDto.supplierId,
                },
              },
            },
          },
        },
      });
    } else {
      return this.prisma.bill.create({
        data: {
          ...billDto,
          subTotal,
          total,
          outStandingAmount: total,
          BillItems: { create: billItems },
        },
      });
    }
  }

  async findAll(params: {
    filter_by: string;
    limit?: number;
    offset?: number;
  }) {
    const { filter_by, limit, offset } = params;

    if (isNaN(offset) && isNaN(limit))
      throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
    //Array type
    let bills: (Bill & {
      Supplier: {
        firstName: string;
        lastName: string;
      };
    })[];
    if (isNaN(offset)) {
      if (filter_by === 'All') {
        bills = await this.prisma.bill.findMany({
          take: limit,
          orderBy: {
            billDate: 'desc',
          },
          include: {
            Supplier: { select: { firstName: true, lastName: true } },
          },
        });
      } else {
        bills = await this.prisma.bill.findMany({
          take: limit,
          where: { status: filter_by },
          orderBy: {
            billDate: 'desc',
          },
          include: {
            Supplier: { select: { firstName: true, lastName: true } },
          },
        });
      }
    } else {
      bills = await this.prisma.bill.findMany({
        skip: offset,
        take: limit,
        orderBy: {
          billDate: 'desc',
        },
        include: { Supplier: { select: { firstName: true, lastName: true } } },
      });
    }

    const result = bills.map((bill) => {
      const { Supplier, billDate, billDueDate, ...remain } = bill;

      let billDateString: string;
      if (billDate) billDateString = billDate.toDateString();

      let billDueDateString: string;
      if (billDueDate) {
        billDueDateString = billDueDate.toDateString();
      }

      return {
        ...remain,
        billDate: billDateString,
        billDueDate: billDueDateString,
        supplierName: `${Supplier.firstName} ${Supplier.lastName}`,
      };
    });
    return result;
  }

  async findOne(id: number) {
    const bill = await this.prisma.bill.findUnique({
      where: { id },
      include: {
        BillItems: { where: { billId: id } },
        Supplier: { select: { firstName: true, lastName: true } },
      },
    });

    const { Supplier, ...remain } = bill;
    const supplierName = Supplier.firstName + ' ' + Supplier.lastName;
    const result = { ...remain, supplierName };
    return result;
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
