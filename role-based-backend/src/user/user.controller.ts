import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User, UserRole } from './schemas/user.schema';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Delete(':id')
    @UseGuards(AuthGuard('admin'))
    async deleteUser(@Param('id') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
    }

   
    @Get()
    @UseGuards(AuthGuard('admin'))
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
}



