import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CompanyService } from 'src/company/company.service';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateVendorDto } from './dto/create-vendor.dto';
import { DeleteVendorDto } from './dto/delete-vendor.dto';
import { FindAllVendorsDto } from './dto/findAll-vendors.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(
    private prisma: PrismaService,
    private companyService: CompanyService,
  ) {}

  async create(createVendorDto: CreateVendorDto) {
    const { companyId } = createVendorDto;
    const result = await this.prisma.company.findUnique({
      where: { id: companyId },
      select: { id: true },
    });
    console.log('Create Vendor', result);
    if (!result) throw new BadRequestException('Invalid companyId');
    return this.prisma.vendor.create({
      data: { ...createVendorDto, companyId: result.id },
    });
  }

  findAll(companyId: string) {
    return this.prisma.vendor.findMany({
      where: { companyId },
    });
  }

  findOne(id: number) {
    return this.prisma.vendor.findUnique({ where: { id } });
  }

  async update(updateVendorDto: UpdateVendorDto) {
    const { id, companyId, ...vendor } = updateVendorDto;
    //convert id in string to number
    //const { intId } = { intId: +id };
    console.log('id : ', id);

    return await this.prisma.vendor.update({
      where: { id },
      data: { ...vendor },
    });
  }

  remove(deleteVendorDto: DeleteVendorDto) {
    const { id } = deleteVendorDto;
    return this.prisma.vendor.delete({ where: { id } });
  }
}
