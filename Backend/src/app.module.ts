import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AgencyModule } from './agency/agency.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorMiddleware } from './Middleware/error.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('tayejoshua4:Qm*X!AR2XGJtUvd@sebawi-app.3xgf2rf.mongodb.net/?Sebawi-appretryWrites=true&w=majority'),
    AuthModule,
    AgencyModule,
    VolunteerModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: ErrorMiddleware,
    }],
})
export class AppModule { }
