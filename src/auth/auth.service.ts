import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CompanyService } from 'src/company/company.service';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private companyService: CompanyService,
  ) {}
  //Validate user
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return null;
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash === hash.toString('hex')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      const company = await this.companyService.findByOne(result.id);

      if (!company) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return result;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { userId, ...companyObj } = company;
        console.log('Validate User', { user: result, company: companyObj });
        return { user: result, company: companyObj };
      }
    }
    return null;
  }
  //sign jwt token
  async login(user: any) {
    //user in argument = {user:{}, company:{}}

    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async signUp(name: string, email: string, password: string) {
    //Check if user is already in our database
    const isUserExist = await this.usersService.findByEmail(email);
    if (isUserExist) {
      throw new BadRequestException('User Already Exits');
    }
    //Hash the password
    //1- Generate Salt
    const salt = randomBytes(8).toString('hex');
    //2- Hash password and salt
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    //Save the user in database
    const user = await this.usersService.create({
      name,
      email,
      password: result,
    });
    const company = await this.companyService.createFromSignUp(name, user.id);
    console.log('Company Created : ', company);
    //Return the user
    return user;
  }
}
