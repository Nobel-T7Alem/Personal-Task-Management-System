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
exports.AgencyController = void 0;
const common_1 = require("@nestjs/common");
const agency_service_1 = require("./agency.service");
const update_agency_dto_1 = require("./dto/update-agency.dto");
const create_agency_dto_1 = require("./dto/create-agency.dto");
let AgencyController = class AgencyController {
    constructor(agencyService) {
        this.agencyService = agencyService;
    }
    async createAgency(createAgencyDto) {
        return this.agencyService.createAgency(createAgencyDto);
    }
    readAgency() {
        return this.agencyService.readAgency();
    }
    async updateAgency(id, updateData) {
        return this.agencyService.updateAgency(id, updateData);
    }
    findAll() {
        return this.agencyService.findAll();
    }
    findOne(id) {
        return this.agencyService.findOne(+id);
    }
    update(id, updateAgencyDto) {
        return this.agencyService.update(+id, updateAgencyDto);
    }
    remove(id) {
        return this.agencyService.remove(+id);
    }
};
exports.AgencyController = AgencyController;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agency_dto_1.CreateAgencyDto]),
    __metadata("design:returntype", Promise)
], AgencyController.prototype, "createAgency", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "readAgency", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agency_dto_1.UpdateAgencyDto]),
    __metadata("design:returntype", Promise)
], AgencyController.prototype, "updateAgency", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agency_dto_1.UpdateAgencyDto]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "remove", null);
exports.AgencyController = AgencyController = __decorate([
    (0, common_1.Controller)('agency'),
    __metadata("design:paramtypes", [agency_service_1.AgencyService])
], AgencyController);
//# sourceMappingURL=agency.controller.js.map