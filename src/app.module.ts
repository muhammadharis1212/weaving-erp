import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

import { PrismaModule } from './prisma/prisma.module';
import { ChartofaccountsModule } from './chartofaccounts/chartofaccounts.module';
import { BillsModule } from './bills/bills.module';
import { ItemsModule } from './items/items.module';
import { APP_FILTER, APP_GUARD, RouterModule } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PartyModule } from './party/party.module';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CompanyModule,
    PrismaModule,
    ChartofaccountsModule,
    BillsModule,
    ItemsModule,
    RouterModule.register([{ path: 'items', module: ItemsModule }]),
    PartyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    { provide: APP_FILTER, useClass: PrismaClientExceptionFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
