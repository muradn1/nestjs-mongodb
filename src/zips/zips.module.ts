
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Zip, ZipSchema } from './zips.schema';
import { ZipsService } from './zips.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Zip.name, schema: ZipSchema }])],
  controllers: [],
  providers: [ZipsService],
  exports:[ZipsService]
})
export class ZipsModule {}