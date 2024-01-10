import { IsEmpty } from "class-validator";
import { User } from "src/auth/schemas/user.schema";

export class CreatePostsDto {
    readonly name: string;
    readonly description: string;
    readonly contact: string;

    @IsEmpty({ message: 'you can not pass user id' })
    readonly user: User;
}
