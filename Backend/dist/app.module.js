"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const agency_module_1 = require("./agency/agency.module");
const volunteer_module_1 = require("./volunteer/volunteer.module");
const core_1 = require("@nestjs/core");
const error_middleware_1 = require("./Middleware/error.middleware");
const postagency_module_1 = require("./postagency/postagency.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://ruthalemfanta:RUzhHpZmurDTtWXC@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
            agency_module_1.AgencyModule,
            volunteer_module_1.VolunteerModule,
            postagency_module_1.PostagencyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
            { provide: core_1.APP_FILTER,
                useClass: error_middleware_1.ErrorMiddleware, }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map