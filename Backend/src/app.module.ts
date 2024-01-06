import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tayejoshua4:Qm*X!AR2XGJtUvd@sebawi-app.3xgf2rf.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
