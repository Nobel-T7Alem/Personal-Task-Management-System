import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './schemas/posts.schema';
import mongoose, {Model} from 'mongoose'
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

  //All posts
  async findAll(): Promise<Posts[]> {
    // const resPerPage = 2;
    // const currentPage = Number(query.page) || 1;
    // const skip = resPerPage * (currentPage - 1);
  
    // const keyword = query.keyword
    //   ? {
    //       name: {
    //         $regex: query.keyword,
    //         $options: 'i',
    //       },
    //     }
    //   : {};
  
    // const posts = await this.postsModel.find({ ...keyword })
    //   .limit(resPerPage)
    //   .skip(skip)
    //   .exec();
  
    // return posts;
    const posts = await this.postsModel.find()
    return posts
  }

 //find posts by id
 async findById(id:string): Promise<Posts>{
  const isValidID = mongoose.isValidObjectId(id)
 
  const posts = await this.postsModel.findById(id)
  

  if(!isValidID){
    throw new BadRequestException('Please enter correct id!')
  }

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
