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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { VolunteerService } from './volunteer.service';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer } from './volunteer.model';
export declare class VolunteerController {
    private readonly volunteerService;
    constructor(volunteerService: VolunteerService);
    createVolunteer(volunteerDto: Volunteer): Promise<Volunteer>;
    readVolunteer(): Promise<void | (import("mongoose").Document<unknown, {}, import("./volunteer.model").VolunteerDocument> & Volunteer & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateVolunteer(id: string, updateData: UpdateVolunteerDto): Promise<Volunteer>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVolunteerDto: UpdateVolunteerDto): string;
    remove(id: string): string;
}
