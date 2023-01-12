/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentAuthUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log('Current User Decorator : ', request.user);
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
