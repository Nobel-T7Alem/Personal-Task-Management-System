import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Volunteer, VolunteerDocument } from './volunteer.model';



@Injectable()
export class VolunteerService {
  constructor(
    @InjectModel('volunteer') private readonly volunteerModel: Model<VolunteerDocument>
   ){}

   //creating a volunteer
  async createVolunteer (volunteer: Volunteer): Promise<Volunteer>{
    const newVolunteer = new this.volunteerModel(volunteer)
    return newVolunteer.save()
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
