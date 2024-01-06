import { Injectable } from '@nestjs/common';
import { Agency, AgencyDocument } from '../agency/agency.model';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'


@Injectable()
export class AgencyService {
  constructor(
    @InjectModel('agency') private readonly agencyModel: Model<AgencyDocument>
   ){}

 //creating an agency
 async createAgency (agency: Agency): Promise<Agency>{
  const newAgency = new this.agencyModel(agency)
  return newAgency.save()
 }
 //reading agency collection 
 async readAgency(){
  return this.agencyModel.find({})
  .then((agency)=>{return agency})
  .catch((err)=>console.log(err))
 }

  //update the data
async updateAgency(id, data): Promise<Agency>{
  return this.agencyModel.findByIdAndUpdate(id, data,{new:true})
}

  findAll() {
    return `This action returns all agency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agency`;
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: number) {
    return `This action removes a #${id} agency`;
  }
}
