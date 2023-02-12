import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        uri: 'mongodb://root:root4242@localhost:27017/?directConnection=true',
      }),
      inject: [ConfigService],
    }),
  ],
})
export default class DatabaseModule {}
