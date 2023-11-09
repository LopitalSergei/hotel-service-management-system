import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/models/users/dto/create-user.dto';
import { UsersService } from 'src/models/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/models/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.findByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        `Пользователь с email: ${userDto.email} уже существует!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }
  async login(userDto: CreateUserDto) {}

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
