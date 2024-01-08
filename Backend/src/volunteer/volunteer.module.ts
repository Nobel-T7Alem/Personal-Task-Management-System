import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerService } from './volunteer.service';
import { VolunteerController } from './volunteer.controller';
import { VolunteerSchema } from './volunteer.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'volunteer', schema:VolunteerSchema}])
  ],
  controllers: [VolunteerController],
  providers: [VolunteerService],
  exports: [MongooseModule.forFeature([{ name: 'volunteer', schema: VolunteerSchema }])],
})
export class VolunteerModule {}
