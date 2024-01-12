import { User } from './schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    deleteUser(userId: string): Promise<void>;
    getPosts(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
