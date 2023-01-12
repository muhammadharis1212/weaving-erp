import { Body, Controller, Post, Get, Patch, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CurrentAuthUser } from 'src/users/decorators/current-auth-user.decorator';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company-dto';
import { CompanyEntity } from './entities/company.entity';

@ApiTags('Company')
@ApiBearerAuth()
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOkResponse({ type: CompanyEntity })
  @Post('create')
  createCompany(
    @Body() body: CreateCompanyDto,
    @CurrentAuthUser('id') authUserId,
  ) {
    return this.companyService.create(body, authUserId);
  }

  @ApiOkResponse({ type: CompanyEntity })
  @Patch(':id/update')
  update(
    @Body() updateCompanyDto: UpdateCompanyDto,
    @Param('id') companyId: string,
  ) {
    return this.companyService.update(updateCompanyDto, companyId);
  }

  @Get()
  findCompany(@CurrentAuthUser('id') userId: string) {
    return this.companyService.findByOne(userId);
  }
}
