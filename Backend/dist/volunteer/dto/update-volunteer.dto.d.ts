import { CreateVolunteerDto } from './create-volunteer.dto';
declare const UpdateVolunteerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVolunteerDto>>;
export declare class UpdateVolunteerDto extends UpdateVolunteerDto_base {
    username: string;
}
export {};
