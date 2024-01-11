import { Controller, Get, Post, Body, Patch, Param, Delete,Put, UseGuards, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/create-posts.dto';
import {UpdatePostsDto} from './dto/update-posts.dto'
import { Posts } from './schemas/posts.schema';
import { AuthGuard } from '@nestjs/passport';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService:PostsService) {}

 
  @Post()
  @UseGuards(AuthGuard())
  async createPosts(@Body() postsDto: CreatePostsDto, @Req() req,){
    return this.postsService.createPosts(postsDto, req.user)
  }

  @Get()
  async getAllUser(): Promise<Posts[]>{
    return this.postsService.findAll();
  }

  @Get(':id')
  async getPosts(
    @Param('id')
    id: string 
  ): Promise<Posts>{
    return this.postsService.findById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id:string ,@Body() posts:UpdatePostsDto) : Promise<Posts>{
    return this.postsService.updatePosts(id, posts)
  }  

}
