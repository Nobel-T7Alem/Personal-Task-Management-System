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
exports.VolunteerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VolunteerService = class VolunteerService {
    constructor(volunteerModel) {
        this.volunteerModel = volunteerModel;
    }
    async createVolunteer(volunteer) {
        const newVolunteer = new this.volunteerModel(volunteer);
        return newVolunteer.save();
    }
    async readVolunteer() {
        return this.volunteerModel.find({})
            .then((volunteer) => { return volunteer; })
            .catch((err) => console.log(err));
    }
    async updateVolunteer(id, data) {
        return this.volunteerModel.findByIdAndUpdate(id, data, { new: true });
    }
    create(createVolunteerDto) {
        return 'This action adds a new volunteer';
    }
    findAll() {
        return `This action returns all volunteer`;
    }
    findOne(id) {
        return `This action returns a #${id} volunteer`;
    }
    update(id, updateVolunteerDto) {
        return `This action updates a #${id} volunteer`;
    }
    remove(id) {
        return `This action removes a #${id} volunteer`;
    }
};
exports.VolunteerService = VolunteerService;
exports.VolunteerService = VolunteerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('volunteer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VolunteerService);
//# sourceMappingURL=volunteer.service.js.map