import { MongoBaseRepositoryInterface } from 'src/libs/interfaces/mongo-base.interface';
import Message from 'src/messages/schemas/message.schema';

export interface MessageRepositoryInterface
  extends MongoBaseRepositoryInterface<Message> {}
