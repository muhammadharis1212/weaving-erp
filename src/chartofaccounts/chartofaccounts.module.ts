import { Module } from '@nestjs/common';
import { ChartofaccountsService } from './chartofaccounts.service';
import { ChartofaccountsController } from './chartofaccounts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ChartofaccountsController],
  providers: [ChartofaccountsService],
})
export class ChartofaccountsModule {}
