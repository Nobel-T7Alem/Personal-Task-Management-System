import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ruthalemfanta:qJUhHijrCAkRWK28@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
