import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type VolunteerDocument = Volunteer & Document 

@Schema()
export class Volunteer{
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({default:Date.now})
    date_added: Date;
}

export const VolunteerSchema = SchemaFactory.createForClass(Volunteer)