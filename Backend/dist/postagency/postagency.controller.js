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
exports.PostagencyController = void 0;
const common_1 = require("@nestjs/common");
const postagency_service_1 = require("./postagency.service");
const update_postagency_dto_1 = require("./dto/update-postagency.dto");
const postagency_model_1 = require("./postagency.model");
let PostagencyController = class PostagencyController {
    constructor(postagencyService) {
        this.postagencyService = postagencyService;
    }
    async createPostagency(agencyDto) {
        return this.postagencyService.createPostagency(agencyDto);
    }
    findAll() {
        return this.postagencyService.findAll();
    }
    findOne(id) {
        return this.postagencyService.findOne(+id);
    }
    update(id, updatePostagencyDto) {
        return this.postagencyService.update(+id, updatePostagencyDto);
    }
    remove(id) {
        return this.postagencyService.remove(+id);
    }
};
exports.PostagencyController = PostagencyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postagency_model_1.Postagency]),
    __metadata("design:returntype", Promise)
], PostagencyController.prototype, "createPostagency", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostagencyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostagencyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_postagency_dto_1.UpdatePostagencyDto]),
    __metadata("design:returntype", void 0)
], PostagencyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostagencyController.prototype, "remove", null);
exports.PostagencyController = PostagencyController = __decorate([
    (0, common_1.Controller)('postagency'),
    __metadata("design:paramtypes", [postagency_service_1.PostagencyService])
], PostagencyController);
//# sourceMappingURL=postagency.controller.js.map