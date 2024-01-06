import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { AgencySchema } from './agency.model';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ruthalemfanta:UCncYZKAtJ7stw9S@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'agency', schema:AgencySchema}])
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
