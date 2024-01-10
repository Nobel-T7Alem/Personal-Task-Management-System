import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './schemas/posts.schema';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/auth/schemas/user.schema';
@Injectable()
export class PostsService {
 constructor(
  @InjectModel('posts') private readonly postsModel: Model<Posts>,
 ){}

 //creating a posts
 async createPosts (posts: Posts, user: User): Promise<Posts>{
  const newPosts = await new this.postsModel(posts)
  return newPosts.save()
 }

 //reading posts collection 
 async readPosts(){
  return this.postsModel.find({})
  .then((posts)=>{return posts})
  .catch((err)=>console.log(err))
 }

 async findAll(): Promise<Posts[]> {
  const postss = await this.postsModel.find();
  return postss;
 }

 //find posts by id
async findById(id:string): Promise<Posts>{
  const posts = await this.postsModel.findById(id)
  
  if(!posts){
    throw new NotFoundException('Posts not found!')
  }

  return posts;

}

 //update the data
async updatePosts(id: string, posts: Posts): Promise<Posts>{
  return await this.postsModel.findByIdAndUpdate(id, posts, {new:true, runValidators: true,})
}

//delete posts by id

}
