import {
  Body,
  Controller,
  Post,
  Request,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/auth-register-dto';
import { SkipAuth } from './constants/constants';
import { ApiBasicAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthLoginEntity } from './entities/auth-login.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipAuth()
  @ApiCreatedResponse({
    status: 201,
    description: 'Account Created Successfully',
  })
  @Post('register')
  async registerUser(@Body() body: RegisterUserDto) {
    const { name, email, password } = body;
    const registerUser = this.authService.signUp(name, email, password);
    const error = { statusCode: null, message: '', error: '' };
    await registerUser.catch((err) => {
      if (err.response.statusCode === 400) {
        Object.assign(error, err.response);
      }
    });

    if (error.statusCode === 400)
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    else return 'User Created Successfully';
  }

  @SkipAuth()
  @UseGuards(AuthGuard('local'))
  @ApiCreatedResponse({
    status: 201,
    description: `{access_token: "token value",  user: { id, email }, company: { id, name } }`,
    type: AuthLoginEntity,
  })
  @Post('login')
  async login(@Request() req: any) {
    const { access_token } = await this.authService.login(req.user.user);
    return {
      access_token,
      user: { ...req.user.user },
      company: { ...req.user.company },
    };
  }
}
