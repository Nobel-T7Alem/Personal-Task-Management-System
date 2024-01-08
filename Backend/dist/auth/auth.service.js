"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const agency_service_1 = require("../agency/agency.service");
const volunteer_service_1 = require("../volunteer/volunteer.service");
let AuthService = class AuthService {
    constructor(jwtService, agencyService, volunteerService) {
        this.jwtService = jwtService;
        this.agencyService = agencyService;
        this.volunteerService = volunteerService;
    }
    async loginAgency(agencyLoginDto) {
        const agency = await this.validateAgency(agencyLoginDto);
        const payload = { username: agency.username, sub: agency.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async loginVolunteer(volunteerLoginDto) {
        const volunteer = await this.validateVolunteer(volunteerLoginDto);
        const payload = { username: volunteer.username, sub: volunteer.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async registerAgency(agencyRegistrationDto) {
        await this.agencyService.createAgency(agencyRegistrationDto);
    }
    async registerVolunteer(volunteerRegistrationDto) {
        await this.volunteerService.create(volunteerRegistrationDto);
    }
    async validateAgency(agencyLoginDto) {
        const agency = await this.agencyService.validateAgency(agencyLoginDto);
        if (!agency) {
            throw new common_1.UnauthorizedException('Invalid agency credentials');
        }
        return agency;
    }
    async validateVolunteer(volunteerLoginDto) {
        const volunteer = await this.volunteerService.validateVolunteer(volunteerLoginDto);
        if (!volunteer) {
            throw new common_1.UnauthorizedException('Invalid volunteer credentials');
        }
        return volunteer;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        agency_service_1.AgencyService,
        volunteer_service_1.VolunteerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map