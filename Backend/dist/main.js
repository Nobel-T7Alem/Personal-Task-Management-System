"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const agency_module_1 = require("./agency/agency.module");
const volunteer_module_1 = require("./volunteer/volunteer.module");
async function bootstrap() {
    const agencyEntry = await core_1.NestFactory.create(agency_module_1.AgencyModule);
    await agencyEntry.listen(3000);
    const volunteerEntry = await core_1.NestFactory.create(volunteer_module_1.VolunteerModule);
    await volunteerEntry.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map