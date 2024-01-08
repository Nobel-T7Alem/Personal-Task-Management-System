import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import crypto from 'crypto';
export type AgencyDocument = Agency & Document 

@Schema()
export class Agency{
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true, unique: true })
    email: string;
  
    @Prop({ required: true, unique: true })
    username: string;
  
    @Prop({ required: true })
    description: string;
  
    @Prop({ required: true })
    password: string;

    @Prop({default:Date.now})
    date_added: Date;
}



export const AgencySchema = SchemaFactory.createForClass(Agency)

