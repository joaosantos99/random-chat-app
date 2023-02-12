import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoBaseRepository } from 'src/libs/repositories/mongo/mongo-base.repository';
import { MessageRepositoryInterface } from '../interface/repository/message.repository.interface';
import Message, { MessageDocument } from '../schemas/message.schema';

@Injectable()
export default class MessageRepository
  extends MongoBaseRepository<Message>
  implements MessageRepositoryInterface
{
  constructor(
    @InjectModel(Message.name)
    private model: Model<MessageDocument>
  ) {
    super(model);
  }
}
