import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { AgencySchema } from './agency.model';



@Module({
  imports: [
   
    MongooseModule.forFeature([{name:'agency', schema:AgencySchema}])
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [MongooseModule.forFeature([{ name: 'agency', schema: AgencySchema }])],
})
export class AgencyModule {}
