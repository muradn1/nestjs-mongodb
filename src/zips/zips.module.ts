
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Zip, ZipSchema } from './zip.schema';
import { ZipsResolver } from './zips.resolver';
import { ZipsService } from './zips.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Zip.name, schema: ZipSchema }])],
  controllers: [],
  providers: [ZipsService, ZipsResolver],
  exports:[ZipsService]
})
export class ZipsModule {}