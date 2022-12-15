import { ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { GetUserDto } from '../dto/get-user.dto';

export class UserInterceptor implements NestInterceptor {
  constructor(private dto: GetUserDto) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(GetUserDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
