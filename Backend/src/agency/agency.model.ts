import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AgencyDocument = Agency & Document 

@Schema()
export class Agency{
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({default:Date.now})
    date_added: Date;
}

export const AgencySchema = SchemaFactory.createForClass(Agency)