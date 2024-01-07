import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerService } from './volunteer.service';
import { VolunteerController } from './volunteer.controller';
import { VolunteerSchema } from './volunteer.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tayejoshua4:Qm*X!AR2XGJtUvd@sebawi-app.3xgf2rf.mongodb.net/Sebawi-app?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'volunteer', schema:VolunteerSchema}])
  ],
  controllers: [VolunteerController],
  providers: [VolunteerService],
})
export class VolunteerModule {}
