"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agency_service_1 = require("./agency.service");
const agency_controller_1 = require("./agency.controller");
const agency_model_1 = require("./agency.model");
let AgencyModule = class AgencyModule {
};
exports.AgencyModule = AgencyModule;
exports.AgencyModule = AgencyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://ruthalemfanta:UCncYZKAtJ7stw9S@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: 'agency', schema: agency_model_1.AgencySchema }])
        ],
        controllers: [agency_controller_1.AgencyController],
        providers: [agency_service_1.AgencyService],
    })
], AgencyModule);
//# sourceMappingURL=agency.module.js.map