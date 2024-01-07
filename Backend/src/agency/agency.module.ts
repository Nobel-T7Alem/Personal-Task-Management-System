import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { AgencySchema } from './agency.model';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tayejoshua4:Qm*X!AR2XGJtUvd@sebawi-app.3xgf2rf.mongodb.net/Sebawi-app?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'agency', schema:AgencySchema}])
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
