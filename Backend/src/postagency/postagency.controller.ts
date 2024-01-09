import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostagencyService } from './postagency.service';
import { CreatePostagencyDto } from './dto/create-postagency.dto';
import { UpdatePostagencyDto } from './dto/update-postagency.dto';
import { Postagency } from './postagency.model';


@Controller('postagency')
export class PostagencyController {
  constructor(private readonly postagencyService: PostagencyService) {}

  @Post()
  async createPostagency(@Body() agencyDto: Postagency){
    return this.postagencyService.createPostagency(agencyDto)
  }

  @Get()
  findAll() {
    return this.postagencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postagencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostagencyDto: UpdatePostagencyDto) {
    return this.postagencyService.update(+id, updatePostagencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postagencyService.remove(+id);
  }
}
