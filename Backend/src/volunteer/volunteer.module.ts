import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerService } from './volunteer.service';
import { VolunteerController } from './volunteer.controller';
import { VolunteerSchema } from './volunteer.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ruthalemfanta:UCncYZKAtJ7stw9S@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'volunteer', schema:VolunteerSchema}])
  ],
  controllers: [VolunteerController],
  providers: [VolunteerService],
})
export class VolunteerModule {}
