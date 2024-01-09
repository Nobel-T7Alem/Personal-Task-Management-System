import { Module } from '@nestjs/common';
import { PostagencyService } from './postagency.service';
import { PostagencyController } from './postagency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostagencySchema } from './postagency.model';


@Module({
  imports: [
    MongooseModule.forFeature([{name:'postagency', schema:PostagencySchema}])
  ],
  controllers: [PostagencyController],
  providers: [PostagencyService],
  exports: [MongooseModule.forFeature([{name:'postagency', schema:PostagencySchema}])]
})
export class PostagencyModule {}
