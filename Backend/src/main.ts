import { NestFactory } from '@nestjs/core';
import { AgencyModule } from './agency/agency.module';
import { VolunteerModule } from './volunteer/volunteer.module'
async function bootstrap() {
  const agencyEntry = await NestFactory.create(AgencyModule);
  await agencyEntry.listen(3000);

  const volunteerEntry = await NestFactory.create(VolunteerModule);
  await volunteerEntry.listen(4000);
  
}
bootstrap();

