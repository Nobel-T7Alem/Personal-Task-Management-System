import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/user/schemas/user.schema";

export class CreatePostsDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty() 
    @IsString()
    readonly contact: string;

    @IsEmpty({ message: 'you can not pass user id' })
    readonly user: User;
}
