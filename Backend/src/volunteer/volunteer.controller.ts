import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer } from './volunteer.model';

@Controller('volunteer')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  async createVolunteer(@Body() volunteerDto: Volunteer){
    return this.volunteerService.createVolunteer(volunteerDto)
  }

  @Get()
  readVolunteer(){
    return this.volunteerService.readVolunteer()
  }

  @Put(':id')
  async updateVolunteer(@Param('id') id:string ,@Body() updateData:UpdateVolunteerDto) : Promise<Volunteer>{
    return this.volunteerService.updateVolunteer(id, updateData)
  }

  @Get()
  findAll() {
    return this.volunteerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volunteerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVolunteerDto: UpdateVolunteerDto) {
    return this.volunteerService.update(+id, updateVolunteerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volunteerService.remove(+id);
  }
}
