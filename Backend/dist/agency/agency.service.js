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
exports.AgencyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AgencyService = class AgencyService {
    constructor(agencyModel) {
        this.agencyModel = agencyModel;
    }
    async createAgency(agency) {
        const newAgency = new this.agencyModel(agency);
        return newAgency.save();
    }
    async readAgency() {
        return this.agencyModel.find({})
            .then((agency) => { return agency; })
            .catch((err) => console.log(err));
    }
    async updateAgency(id, data) {
        return this.agencyModel.findByIdAndUpdate(id, data, { new: true });
    }
    findAll() {
        return `This action returns all agency`;
    }
    findOne(id) {
        return `This action returns a #${id} agency`;
    }
    update(id, updateAgencyDto) {
        return `This action updates a #${id} agency`;
    }
    remove(id) {
        return `This action removes a #${id} agency`;
    }
};
exports.AgencyService = AgencyService;
exports.AgencyService = AgencyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('agency')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AgencyService);
//# sourceMappingURL=agency.service.js.map