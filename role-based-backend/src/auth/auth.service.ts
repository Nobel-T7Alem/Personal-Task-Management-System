import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { LogInDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async signUp(signUpDto: SignUpDto) {
        Promise<{ token: string }>
        const { name, username, email, password } = signUpDto


        const hashedPassword = await bcrypt.hash(password, 10)


        const user = await this.userModel.create({
            name,
            username,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }

    async login(loginDTo: LogInDto): Promise<{ token: string }> {
        const { username, password } = loginDTo

        const user = await this.userModel.findOne({ username })

        if (!user) {
            throw new UnauthorizedException('Invalid username or password')
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            throw new UnauthorizedException('Invalid username or password')
        }

        const token = this.jwtService.sign({ id: user._id })
        return { token }

    }
}
