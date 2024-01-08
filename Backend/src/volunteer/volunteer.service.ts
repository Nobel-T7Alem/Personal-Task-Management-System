import { Injectable,BadRequestException } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Volunteer, VolunteerDocument } from './volunteer.model';
import { UnauthorizedException } from '@nestjs/common';
import { VolunteerLoginDto } from './dto/volunteer-login.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';


@Injectable()
export class VolunteerService {
  constructor(
    @InjectModel('volunteer') private readonly volunteerModel: Model<VolunteerDocument>
   ){}

   //creating a volunteer
   async createVolunteer(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const volunteer = plainToClass(CreateVolunteerDto, createVolunteerDto);
    const errors = await validate(volunteer);
  
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  
    const newVolunteer = new this.volunteerModel(volunteer);
    return newVolunteer.save();
  }

  //reading user collection 
  async readVolunteer(){
    return this.volunteerModel.find({})
    .then((volunteer)=>{return volunteer})
    .catch((err)=>console.log(err))
   }

    //update the data
  async updateVolunteer(id, data): Promise<Volunteer>{
    return this.volunteerModel.findByIdAndUpdate(id, data,{new:true})
  }
   //validate volunteer
   async validateVolunteer(volunteerLoginDto: VolunteerLoginDto): Promise<Volunteer> {
    const { username, password } = volunteerLoginDto;
    const volunteer = await this.volunteerModel.findOne({ username });
  
    if (!volunteer || volunteer.password !== password) {
      throw new UnauthorizedException('Invalid volunteer credentials');
    }
  
    return volunteer;
  }

  // default
  create(createVolunteerDto: CreateVolunteerDto) {
    return 'This action adds a new volunteer';
  }

  findAll() {
    return `This action returns all volunteer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} volunteer`;
  }

  update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    return `This action updates a #${id} volunteer`;
  }

  remove(id: number) {
    return `This action removes a #${id} volunteer`;
  }
}
