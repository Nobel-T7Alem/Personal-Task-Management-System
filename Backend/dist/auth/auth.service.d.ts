import { JwtService } from '@nestjs/jwt';
import { AgencyService } from '../agency/agency.service';
import { VolunteerService } from '../volunteer/volunteer.service';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';
import { VolunteerLoginDto } from '../volunteer/dto/volunteer-login.dto';
import { AgencyRegistrationDto } from '../agency/dto/agency-registration.dto';
import { VolunteerRegistrationDto } from '../volunteer/dto/volunteer-registration.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly agencyService;
    private readonly volunteerService;
    constructor(jwtService: JwtService, agencyService: AgencyService, volunteerService: VolunteerService);
    loginAgency(agencyLoginDto: AgencyLoginDto): Promise<{
        access_token: string;
    }>;
    loginVolunteer(volunteerLoginDto: VolunteerLoginDto): Promise<{
        access_token: string;
    }>;
    registerAgency(agencyRegistrationDto: AgencyRegistrationDto): Promise<void>;
    registerVolunteer(volunteerRegistrationDto: VolunteerRegistrationDto): Promise<void>;
    private validateAgency;
    private validateVolunteer;
}
