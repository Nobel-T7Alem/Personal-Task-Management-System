import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AgencyService } from '../agency/agency.service';
import { VolunteerService } from '../volunteer/volunteer.service';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';
import { VolunteerLoginDto } from '../volunteer/dto/volunteer-login.dto';
import { AgencyRegistrationDto } from '../agency/dto/agency-registration.dto';
import { VolunteerRegistrationDto } from '../volunteer/dto/volunteer-registration.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly agencyService: AgencyService,
    private readonly volunteerService: VolunteerService,
  ) {}

  async loginAgency(agencyLoginDto: AgencyLoginDto) {
    const agency = await this.validateAgency(agencyLoginDto);
    const payload = { username: agency.username, sub: agency.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginVolunteer(volunteerLoginDto: VolunteerLoginDto) {
    const volunteer = await this.validateVolunteer(volunteerLoginDto);
    const payload = { username: volunteer.username, sub: volunteer.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerAgency(agencyRegistrationDto: AgencyRegistrationDto) {
    await this.agencyService.createAgency(agencyRegistrationDto);
  }

  async registerVolunteer(volunteerRegistrationDto: VolunteerRegistrationDto) {
    await this.volunteerService.create(volunteerRegistrationDto);
  }

  private async validateAgency(agencyLoginDto: AgencyLoginDto) {
    const agency = await this.agencyService.validateAgency(agencyLoginDto);
    if (!agency) {
      throw new UnauthorizedException('Invalid agency credentials');
    }
    return agency;
  }

  private async validateVolunteer(volunteerLoginDto: VolunteerLoginDto) {
    const volunteer = await this.volunteerService.validateVolunteer(volunteerLoginDto);
    if (!volunteer) {
      throw new UnauthorizedException('Invalid volunteer credentials');
    }
    return volunteer;
  }
}