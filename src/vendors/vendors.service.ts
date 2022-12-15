import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';
import { Repository } from 'typeorm';
import { CurrentAuthUser } from 'src/users/decorators/current-auth-user.decorator';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor) private vendorRepo: Repository<Vendor>,
  ) {}

  create(createVendorDto: CreateVendorDto, user: any) {
    const newVendor = this.vendorRepo.create(createVendorDto);
    newVendor.user = user.id;
    return this.vendorRepo.save(newVendor);
  }

  findAll() {
    return this.vendorRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
