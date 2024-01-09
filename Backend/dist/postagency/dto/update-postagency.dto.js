"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostagencyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_postagency_dto_1 = require("./create-postagency.dto");
class UpdatePostagencyDto extends (0, mapped_types_1.PartialType)(create_postagency_dto_1.CreatePostagencyDto) {
}
exports.UpdatePostagencyDto = UpdatePostagencyDto;
//# sourceMappingURL=update-postagency.dto.js.map