import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './controller/messages.controller';
import { TYPES } from './interface/types';
import MessageRepository from './repository/message.repository';
import Message, { MessageSchema } from './schemas/message.schema';
import MessagesService from './services/messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [
    { provide: TYPES.repository, useClass: MessageRepository },
    { provide: TYPES.services.messagesService, useClass: MessagesService },
  ],
  controllers: [MessagesController],
})
export class MessagesModule {}
