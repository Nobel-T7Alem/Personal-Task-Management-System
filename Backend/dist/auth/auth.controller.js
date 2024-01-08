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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const agency_login_dto_1 = require("../agency/dto/agency-login.dto");
const volunteer_login_dto_1 = require("../volunteer/dto/volunteer-login.dto");
const agency_registration_dto_1 = require("../agency/dto/agency-registration.dto");
const volunteer_registration_dto_1 = require("../volunteer/dto/volunteer-registration.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async agencyLogin(agencyLoginDto) {
        const token = await this.authService.loginAgency(agencyLoginDto);
        return { token };
    }
    async volunteerLogin(volunteerLoginDto) {
        const token = await this.authService.loginVolunteer(volunteerLoginDto);
        return { token };
    }
    async agencyRegister(agencyRegisterDto) {
        await this.authService.registerAgency(agencyRegisterDto);
        return { message: 'Agency registration successful' };
    }
    async volunteerRegister(volunteerRegisterDto) {
        await this.authService.registerVolunteer(volunteerRegisterDto);
        return { message: 'Volunteer registration successful' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('agency/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agency_login_dto_1.AgencyLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agencyLogin", null);
__decorate([
    (0, common_1.Post)('volunteer/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [volunteer_login_dto_1.VolunteerLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "volunteerLogin", null);
__decorate([
    (0, common_1.Post)('agency/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agency_registration_dto_1.AgencyRegistrationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "agencyRegister", null);
__decorate([
    (0, common_1.Post)('volunteer/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [volunteer_registration_dto_1.VolunteerRegistrationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "volunteerRegister", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map