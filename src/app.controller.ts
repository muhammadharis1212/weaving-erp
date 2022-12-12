import {
  Controller,
  Get,
  Header,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CurrentAuthUser } from './users/decorators/current-auth-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log('In login method, App controller', req.user);
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentAuthUser() currentUser: any) {
    console.log(currentUser);
    return currentUser;
  }
}
