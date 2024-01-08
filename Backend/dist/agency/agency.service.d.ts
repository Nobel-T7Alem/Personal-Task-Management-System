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
import { Agency, AgencyDocument } from '../agency/agency.model';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { Model } from 'mongoose';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';
export declare class AgencyService {
    private readonly agencyModel;
    constructor(agencyModel: Model<AgencyDocument>);
    createAgency(createAgencyDto: CreateAgencyDto): Promise<Agency>;
    readAgency(): Promise<void | (import("mongoose").Document<unknown, {}, AgencyDocument> & Agency & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateAgency(id: any, data: any): Promise<Agency>;
    validateAgency(agencyLoginDto: AgencyLoginDto): Promise<Agency>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAgencyDto: UpdateAgencyDto): string;
    remove(id: number): string;
}
