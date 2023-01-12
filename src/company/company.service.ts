import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrentAuthUser } from 'src/users/decorators/current-auth-user.decorator';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company-dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  create(createCompanyDto: CreateCompanyDto, authUserId: string) {
    return this.prisma.company.create({
      data: {
        ...createCompanyDto,
        userId: authUserId,
      },
    });
  }
  createFromSignUp(companyName: string, userId: string) {
    if (companyName && userId)
      return this.prisma.company.create({
        data: { name: companyName, userId: userId },
      });
    else
      throw new HttpException(
        {
          reason: 'UserId and company name should not be empty',
        },
        HttpStatus.BAD_REQUEST,
      );
  }
  findByOne(authUserId: string) {
    return this.prisma.company.findUnique({ where: { userId: authUserId } });
  }
  async update(updateCompanyDto: UpdateCompanyDto, companyId: string) {
    return this.prisma.company.update({
      where: { id: companyId },
      data: {
        ...updateCompanyDto,
      },
    });
  }
}
