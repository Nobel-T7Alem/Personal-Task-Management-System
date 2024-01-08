import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type VolunteerDocument = Volunteer & Document 

@Schema()
export class Volunteer{
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true, unique: true })
    email: string;
  
    @Prop({ required: true, unique: true })
    username: string;
  
    @Prop({ required: true })
    password: string;

    @Prop({default:Date.now})
    date_added: Date;
}

export const VolunteerSchema = SchemaFactory.createForClass(Volunteer)