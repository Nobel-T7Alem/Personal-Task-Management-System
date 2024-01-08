"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("../config");
const jwt_strategy_1 = require("./strategies/jwt-strategy");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const volunteer_service_1 = require("../volunteer/volunteer.service");
const agency_service_1 = require("../agency/agency.service");
const volunteer_module_1 = require("../volunteer/volunteer.module");
const agency_module_1 = require("../agency/agency.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            agency_module_1.AgencyModule,
            volunteer_module_1.VolunteerModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: config_1.jwtConstants.secret,
                signOptions: { expiresIn: config_1.jwtConstants.expiresIn },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, volunteer_service_1.VolunteerService, agency_service_1.AgencyService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map