import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CurrentAuthUser } from './users/decorators/current-auth-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any, @CurrentAuthUser() currentUser: any) {
    console.log('In login method, App controller', req.user);
    const { access_token } = await this.authService.login(req.user);
    return {
      access_token,
      user: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
      },
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('userprofile')
  getProfile(@CurrentAuthUser() currentUser: any) {
    console.log(currentUser);
    return currentUser;
  }
}
