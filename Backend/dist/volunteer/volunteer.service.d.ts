/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Model } from 'mongoose';
import { Volunteer, VolunteerDocument } from './volunteer.model';
export declare class VolunteerService {
    private readonly volunteerModel;
    constructor(volunteerModel: Model<VolunteerDocument>);
    createVolunteer(volunteer: Volunteer): Promise<Volunteer>;
    readVolunteer(): Promise<void | (import("mongoose").Document<unknown, {}, VolunteerDocument> & Volunteer & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateVolunteer(id: any, data: any): Promise<Volunteer>;
    create(createVolunteerDto: CreateVolunteerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVolunteerDto: UpdateVolunteerDto): string;
    remove(id: number): string;
}