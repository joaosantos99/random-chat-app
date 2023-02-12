import { Controller, Post, Body, Inject, Get } from '@nestjs/common';

import MessageDto from '../dto/message.dto';
import { MessagesServiceInterface } from '../interface/services/messages.service.interface';
import { TYPES } from '../interface/types';

@Controller('messages')
export class MessagesController {
  constructor(
    @Inject(TYPES.services.messagesService)
    private readonly messagesService: MessagesServiceInterface
  ) {}

  @Post(':roomId')
  async sendMessage(@Body() requestObj: MessageDto) {
    return this.messagesService.sendMessage(requestObj);
  }

  @Get()
  async getAllMessages() {
    return this.messagesService.getAllMessages();
  }
}
