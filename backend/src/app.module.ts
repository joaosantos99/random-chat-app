import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import DatabaseModule from './database/database.module';

@Module({
  imports: [DatabaseModule, MessagesModule],
  providers: [AppService],
})
export class AppModule {}
