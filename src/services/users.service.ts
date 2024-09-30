import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpPayload } from 'src/dtos';
import { User } from 'src/schemas/user.schema';
import { KiotvietService } from './kiotviet.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private kiotService: KiotvietService,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email });
  }

  async create(params: SignUpPayload): Promise<User> {
    try {
      const kiotUser = await this.kiotService.createNewUser(params);

      const createdUser = new this.userModel({
        id: kiotUser.data.id,
        code: kiotUser.data.code,
        email: params.email,
        name: params.name,
        password: params.password,
        address: params.address,
        contactNumber: params.contactNumber,
        gender: params.gender,
        locationName: params.locationName,
        wardName: params.wardName,
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
