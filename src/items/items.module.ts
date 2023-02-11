import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { UOMController } from './controllers/uom.controller';
import { ItemUnitsService } from './services/uom.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyIdValidateMiddleware } from 'src/middlewares/companyId-validate.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [ItemsController, UOMController],
  providers: [ItemsService, ItemUnitsService],
})
export class ItemsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CompanyIdValidateMiddleware).forRoutes(UOMController);
  }
}
