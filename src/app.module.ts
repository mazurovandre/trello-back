import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat/chat.gateway';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/trello'),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, PrismaService],
})
export class AppModule {}
