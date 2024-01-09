
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../config';
import { JwtStrategy } from './strategies/jwt-strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { VolunteerService } from 'src/volunteer/volunteer.service';
import { AgencyService } from 'src/agency/agency.service';
import { VolunteerModule } from '../volunteer/volunteer.module';
import { AgencyModule } from 'src/agency/agency.module';

@Module({
  imports: [
    AgencyModule,
    VolunteerModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, VolunteerService, AgencyService],
})
export class AuthModule { }