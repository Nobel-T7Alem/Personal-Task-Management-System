import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../user/schemas/user.schema';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '../user/dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { LogInDto } from '../user/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async signUp(signUpDto: SignUpDto) {
        Promise<any>
        try {
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
        } catch (error) {
            if (error.name === 'MongoServerError' && error.code === 11000 && Object.keys(error.keyPattern)[0] === 'email') {
                throw new UnauthorizedException('There is an E-mail already associated with this account. Login or use another E-mail.')
            }
        }
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

        const token = this.jwtService.sign({
            id: user._id,
            role: user.role
        })
        return { token }

    }
}
