import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpPayload } from 'src/dtos';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email });
  }

  async create({ email, name, password }: SignUpPayload): Promise<User> {
    try {
      const createdUser = new this.userModel({
        email: email,
        name: name,
        password: password,
      });

      const user = createdUser.save();

      return user;
    } catch (error) {
      console.log('🚀 ~ UsersService ~ create ~ error:', error);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
