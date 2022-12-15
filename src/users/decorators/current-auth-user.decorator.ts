import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentAuthUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log('CurrentUser Decorator', request.user);
    return request.user;
  },
);
