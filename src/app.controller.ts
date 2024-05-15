import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client';

@Controller('chat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getMessages() {
    return await this.appService.getMessages();
  }

  @Post()
  async sendMessage(@Body() createMessageTdo: Prisma.ChatCreateInput) {
    return await this.appService.createMessage(createMessageTdo);
  }
}
