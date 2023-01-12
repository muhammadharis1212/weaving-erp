/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyIdValidateMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Headers : ', req.headers);
    console.log('Request Body : ', req.body);
    console.log('Params : ', req.params);
    console.log(req.baseUrl);
    if (!req.body.companyId) {
      return next();
    }
    const { companyId } = req.body;
    console.log('Middleware companyId : ', companyId);

    next();
  }
}
