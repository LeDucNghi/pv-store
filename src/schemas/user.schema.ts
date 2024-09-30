import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  id: number;

  @Prop()
  code: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: 'member' })
  role: 'member' | 'admin';

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  gender: string;

  @Prop()
  birthdate: Date;

  @Prop()
  createdDate: Date;

  @Prop()
  modifiedDate: Date;

  @Prop({ required: true })
  locationName: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  contactNumber: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] })
  // tickets: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
