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
exports.VolunteerController = void 0;
const common_1 = require("@nestjs/common");
const volunteer_service_1 = require("./volunteer.service");
const create_volunteer_dto_1 = require("./dto/create-volunteer.dto");
const update_volunteer_dto_1 = require("./dto/update-volunteer.dto");
let VolunteerController = class VolunteerController {
    constructor(volunteerService) {
        this.volunteerService = volunteerService;
    }
    async createVolunteer(createVolunteerDto) {
        return this.volunteerService.createVolunteer(createVolunteerDto);
    }
    readVolunteer() {
        return this.volunteerService.readVolunteer();
    }
    async updateVolunteer(id, updateData) {
        return this.volunteerService.updateVolunteer(id, updateData);
    }
    findAll() {
        return this.volunteerService.findAll();
    }
    findOne(id) {
        return this.volunteerService.findOne(+id);
    }
    update(id, updateVolunteerDto) {
        return this.volunteerService.update(+id, updateVolunteerDto);
    }
    remove(id) {
        return this.volunteerService.remove(+id);
    }
};
exports.VolunteerController = VolunteerController;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_volunteer_dto_1.CreateVolunteerDto]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "createVolunteer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VolunteerController.prototype, "readVolunteer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_volunteer_dto_1.UpdateVolunteerDto]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "updateVolunteer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VolunteerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VolunteerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_volunteer_dto_1.UpdateVolunteerDto]),
    __metadata("design:returntype", void 0)
], VolunteerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VolunteerController.prototype, "remove", null);
exports.VolunteerController = VolunteerController = __decorate([
    (0, common_1.Controller)('volunteer'),
    __metadata("design:paramtypes", [volunteer_service_1.VolunteerService])
], VolunteerController);
//# sourceMappingURL=volunteer.controller.js.map