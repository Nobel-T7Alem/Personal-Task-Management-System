import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    findByUsername(value: any) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel('user') private readonly userModel: Model<User>,
    ) { }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async deleteUser(userId: string): Promise<void> {
        const result = await this.userModel.deleteOne({ _id: userId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('User not found');
        }
    }

}

