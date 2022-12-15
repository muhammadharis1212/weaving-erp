import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export function serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('In Interceptor');
    return next.handle().pipe(
      map((data: any) => {
        console.log(
          'In interceptor map method',
          plainToInstance(this.dto, data, {
            excludeExtraneousValues: true,
          }),
        );

        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
