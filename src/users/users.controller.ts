import {
  Controller,
  Get,
  Body,
  Patch,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { serialize } from 'src/interceptor/serialize/serialize.interceptor';
import { CurrentAuthUser } from './decorators/current-auth-user.decorator';
import { AuthUserDto } from './dto/auth-user.dto';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@serialize(AuthUserDto)
@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: UserEntity })
  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  async findOne(@CurrentAuthUser('id') authUserId: string) {
    console.log(authUserId);
    const user = await this.usersService.findOne(authUserId);
    if (!user)
      throw new NotFoundException(`User with ${authUserId} does not exist.`);
    return user;
  }

  @ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized' })
  @ApiOkResponse({ type: UserEntity })
  @Patch('update')
  update(
    @Body() body: UpdateUserDto,
    @CurrentAuthUser('id') authUserId: string,
  ) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Cannot update of undefined');
    if (body.email) throw new BadRequestException('Email cannot be change');
    return this.usersService.update(authUserId, body);
  }
}
