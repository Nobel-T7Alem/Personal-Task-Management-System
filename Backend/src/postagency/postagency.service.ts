import { Injectable } from '@nestjs/common';
import { CreatePostagencyDto } from './dto/create-postagency.dto';
import { UpdatePostagencyDto } from './dto/update-postagency.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Postagency, PostagencyDocument } from './postagency.model';

@Injectable()
export class PostagencyService {

  constructor(
    @InjectModel('postagency') private readonly postagencyModel: Model<PostagencyDocument>
   ){}

  //creating an agency
  async createPostagency (postagency: Postagency): Promise<Postagency>{
    const newPostagency = new this.postagencyModel(postagency)
    return newPostagency.save()
   }

  findAll() {
    return `This action returns all postagency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postagency`;
  }

  update(id: number, updatePostagencyDto: UpdatePostagencyDto) {
    return `This action updates a #${id} postagency`;
  }

  remove(id: number) {
    return `This action removes a #${id} postagency`;
  }
}
