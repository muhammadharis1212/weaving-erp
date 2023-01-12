import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  findOne(id: string) {
    console.log('In User Service');
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(authUserId: string, updateUserDto: UpdateUserDto) {
    if (!Object.keys(updateUserDto).length) {
      return null;
    }
    const { name, address, phone, state, city, zipCode, country } =
      updateUserDto;
    return await this.prisma.user.update({
      where: { id: authUserId },
      data: { name, address, phone, state, city, zipCode, country },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
