import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type MessageDocument = Message & mongoose.Document;

@Schema()
export default class Message {
  @Prop({ nullable: false })
  sendedBy!: string;

  @Prop({ nullable: false })
  message!: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
