import { Inject, Injectable } from '@nestjs/common';

import MessageDto from '../dto/message.dto';
import { MessageRepositoryInterface } from '../interface/repository/message.repository.interface';
import { MessagesServiceInterface } from '../interface/services/messages.service.interface';
import { TYPES } from '../interface/types';
import Message from '../schemas/message.schema';

@Injectable()
export default class MessagesService implements MessagesServiceInterface {
  constructor(
    @Inject(TYPES.repository)
    private readonly messageRepository: MessageRepositoryInterface
  ) {}

  sendMessage(obj: MessageDto) {
    const message: Message = {
      ...obj,
    };

    return this.messageRepository.create(message);
  }
}
