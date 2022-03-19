import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZipsModule } from './zips/zips.module';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
    expandVariables:true }),
    MongooseModule.forRoot(process.env.MONGODB_TRAINING_URI),
    ZipsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
