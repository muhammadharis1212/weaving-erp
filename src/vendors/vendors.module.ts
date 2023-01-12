import { MiddlewareConsumer, Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyModule } from 'src/company/company.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { CompanyIdValidateMiddleware } from 'src/middlewares/companyId-validate.middleware';

@Module({
  imports: [PrismaModule, CompanyModule],
  controllers: [VendorsController],
  providers: [
    VendorsService,
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter,
    },
  ],
})
export class VendorsModule {
  //Middleware for checking companId is valid
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CompanyIdValidateMiddleware).forRoutes(VendorsController);
  }
}
