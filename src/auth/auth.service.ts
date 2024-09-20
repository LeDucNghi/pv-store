import * as bcrypt from 'bcrypt';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInPayload, SignUpPayload, User } from 'src/dtos';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: SignInPayload): Promise<object> {
    try {
      const existedUser = await this.usersService.findOne(email);

      if (!existedUser) {
        throw new HttpException('User not found 🤔', HttpStatus.NOT_FOUND);
      } else {
        await this.verifyPassword(password, existedUser.password);

        const token = await this.generateToken(existedUser);

        return {
          user: token,
        };
      }
    } catch (error) {
      console.log('🚀 ~ AuthService ~ signIn ~ error:', error);

      throw new HttpException(
        'Wrong password or email!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async signUp({ email, password, name }: SignUpPayload): Promise<User> {
    const user = await this.usersService.findOne(email);
    const hashedPwd = await bcrypt.hash(password, 10);

    password = hashedPwd;

    if (user) {
      throw new HttpException(
        'This user already existed 🤔',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const newUser = await this.usersService.create({
        email: email,
        name: name,
        password: password,
      });

      return newUser;
    }
  }

  async verifyPassword(signInPwd: string, storedPwd: string) {
    const isPasswordMatching = await bcrypt.compare(signInPwd, storedPwd);

    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong password or email!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async generateToken(user: User): Promise<string> {
    const payload = {
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      gender: '',
      contactNumber: '',
      address: '',
      locationName: '',
      wardName: '',
    };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}
