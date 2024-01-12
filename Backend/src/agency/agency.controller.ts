import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UploadedFile, HttpStatus, UseInterceptors } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { Agency } from './agency.model';
import { UpdateAgencyDto } from './dto/update-agency.dto';


@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) { }

  @Post()
  async createAgency(@Body() agencyDto: Agency) {
    return this.agencyService.createAgency(agencyDto)
  }

  @Get()
  readAgency() {
    return this.agencyService.readAgency()
  }

  @Put(':id')
  async updateAgency(@Param('id') id: string, @Body() updateData: UpdateAgencyDto): Promise<Agency> {
    return this.agencyService.updateAgency(id, updateData)
  }


  @Get()
  findAll() {
    return this.agencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agencyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgencyDto: UpdateAgencyDto) {
    return this.agencyService.update(+id, updateAgencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agencyService.remove(+id);
  }
}
