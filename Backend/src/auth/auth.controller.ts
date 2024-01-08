import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';
import { VolunteerLoginDto } from '../volunteer/dto/volunteer-login.dto';
import { AgencyRegistrationDto } from '../agency/dto/agency-registration.dto';
import { VolunteerRegistrationDto } from '../volunteer/dto/volunteer-registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('agency/login')
  async agencyLogin(@Body() agencyLoginDto: AgencyLoginDto) {
    const token = await this.authService.loginAgency(agencyLoginDto);
    return { token };
  }

  @Post('volunteer/login')
  async volunteerLogin(@Body() volunteerLoginDto: VolunteerLoginDto) {
    const token = await this.authService.loginVolunteer(volunteerLoginDto);
    return { token };
  }

  @Post('agency/register')
  async agencyRegister(@Body() agencyRegisterDto: AgencyRegistrationDto) {
    await this.authService.registerAgency(agencyRegisterDto);
    return { message: 'Agency registration successful' };
  }

  @Post('volunteer/register')
  async volunteerRegister(@Body() volunteerRegisterDto: VolunteerRegistrationDto) {
    await this.authService.registerVolunteer(volunteerRegisterDto);
    return { message: 'Volunteer registration successful' };
  }
}