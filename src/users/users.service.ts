import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {}
  create(createUserDto: CreateUserDto) {
    const {
      name,
      email,
      password,
      phone,
      addressLine1,
      addressLine2,
      state,
      city,
      postal,
      companyName,
    } = createUserDto;
    const user = this.repo.create({
      name,
      email,
      password,
      phone,
      addressLine1,
      addressLine2,
      state,
      city,
      postal,
      companyName,
    });
    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find({ relations: { vendors: true } });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: ['vendors'],
    });
  }
  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');
    console.log('In userService', updateUserDto);
    Object.assign(user, updateUserDto);
    return this.repo.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
