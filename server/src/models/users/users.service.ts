import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private roleService: RolesService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    const role = await this.roleService.findByValue('USER');
    newUser.roles = [role];
    return await this.userRepository.save(newUser);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findOne({
      where: { id: dto.userId },
    });
    const role = await this.roleService.findByValue(dto.value);

    if (role && user) {
      user.roles.push(role);
      await this.userRepository.save(user);
      return dto;
    }

    throw new HttpException(
      'Пользователь или роль не найдены!',
      HttpStatus.NOT_FOUND,
    );
  }
}
