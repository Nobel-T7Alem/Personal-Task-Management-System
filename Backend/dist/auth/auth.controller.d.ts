import { AuthService } from './auth.service';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';
import { VolunteerLoginDto } from '../volunteer/dto/volunteer-login.dto';
import { AgencyRegistrationDto } from '../agency/dto/agency-registration.dto';
import { VolunteerRegistrationDto } from '../volunteer/dto/volunteer-registration.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    agencyLogin(agencyLoginDto: AgencyLoginDto): Promise<{
        token: {
            access_token: string;
        };
    }>;
    volunteerLogin(volunteerLoginDto: VolunteerLoginDto): Promise<{
        token: {
            access_token: string;
        };
    }>;
    agencyRegister(agencyRegisterDto: AgencyRegistrationDto): Promise<{
        message: string;
    }>;
    volunteerRegister(volunteerRegisterDto: VolunteerRegistrationDto): Promise<{
        message: string;
    }>;
}
