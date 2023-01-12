/* eslint-disable prettier/prettier */
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { jwtConstants } from '../constants/constants';
import { Cache } from 'cache-manager';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private companyService: CompanyService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }
  async validate(req: Request, payload: any) {
    let value = await this.cacheManager.get('companyId');
    if (!value) {
      console.log('In If statement');
      const { id } = await this.companyService.findByOne(payload.sub);

      await this.cacheManager.set('companyId', id, 0);
      value = await this.cacheManager.get('companyId');
      console.log('companyId : ', value);
    }

    return { id: payload.sub, email: payload.email, companyId: value };
  }
}
