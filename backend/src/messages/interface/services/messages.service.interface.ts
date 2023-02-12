import MessageDto from 'src/messages/dto/message.dto';
import Message from '../../schemas/message.schema';

export interface MessagesServiceInterface {
  sendMessage(obj: MessageDto): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
}
