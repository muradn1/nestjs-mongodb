
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZipDocument = Zip & Document;

@Schema()
export class Zip {
    @Prop()
    city: string;
    
    @Prop()
    pop: number;
    
    @Prop()
    zip: string;
    
    @Prop()
    state: string;

    @Prop(raw({
        x: {type: Number},
        y: {type: Number}
    }))
    loc: Record<string,any>
}

export const ZipSchema = SchemaFactory.createForClass(Zip);