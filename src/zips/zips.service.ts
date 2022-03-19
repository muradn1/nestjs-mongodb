import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Zip, ZipDocument } from "./zip.schema";


@Injectable()
export class ZipsService {
    constructor(@InjectModel(Zip.name) private zipModel: Model<ZipDocument>) {}

    async createOne(zipToCreate:Zip):Promise<Zip>{
        const newZip:ZipDocument = new this.zipModel(zipToCreate);
        return newZip.save();
    }

    async findAll({limit}:{limit?:number}={}): Promise<Zip[]>{
        return this.zipModel.find().limit(limit).exec();
    }
}