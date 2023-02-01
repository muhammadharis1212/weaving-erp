import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SuppliersController } from './controllers/suppliers/suppliers.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PartyController, SuppliersController],
  providers: [PartyService],
})
export class PartyModule {}
