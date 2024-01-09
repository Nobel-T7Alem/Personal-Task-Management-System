import { Injectable, BadRequestException } from '@nestjs/common';
import { Agency, AgencyDocument } from '../agency/agency.model';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateAgencyDto } from './dto/create-agency.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UnauthorizedException } from '@nestjs/common';
import { AgencyLoginDto } from '../agency/dto/agency-login.dto';


@Injectable()
export class AgencyService {
  constructor(
    @InjectModel('agency') private readonly agencyModel: Model<AgencyDocument>
  ) { }

  //creating an agency
  async createAgency(createAgencyDto: CreateAgencyDto): Promise<Agency> {
    const agency = plainToClass(CreateAgencyDto, createAgencyDto);
    const errors = await validate(agency);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const newAgency = new this.agencyModel(agency);
    return newAgency.save();
  }
  //reading agency collection 
  async readAgency() {
    return this.agencyModel.find({})
      .then((agency) => { return agency })
      .catch((err) => console.log(err))
  }

  //update the data
  async updateAgency(id, data): Promise<Agency> {
    return this.agencyModel.findByIdAndUpdate(id, data, { new: true })
  }

  //validate agency
  async validateAgency(agencyLoginDto: AgencyLoginDto): Promise<Agency> {
    const { username, password } = agencyLoginDto;
    const agency = await this.agencyModel.findOne({ username });

    if (!agency || agency.password !== password) {
      throw new UnauthorizedException('Invalid agency credentials');
    }

    return agency;
  }
  //the fucntions below were created by default i kept them just incase

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
