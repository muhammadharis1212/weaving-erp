import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  //Validate user
  async validateUser(email: string, pass: string): Promise<any> {
    console.log('In Auth service validateUser function');
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  //sign jwt token
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    console.log('payload : ', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
