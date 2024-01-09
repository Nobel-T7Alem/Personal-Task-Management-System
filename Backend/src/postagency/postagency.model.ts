import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
export type PostagencyDocument = Postagency & Document 

@Schema()
export class Postagency{
    

    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    description: string;
  
    @Prop({ required: true })
    contact: string;

    @Prop({default:Date.now})
    date_added: Date;
}



export const PostagencySchema = SchemaFactory.createForClass(Postagency)

