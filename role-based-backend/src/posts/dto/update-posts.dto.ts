import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
import { CreatePostsDto } from './create-posts.dto';

export class UpdatePostsDto{
    readonly name: string;
    readonly description: string;
    readonly contact: string;
    @IsEmpty({ message: 'you can not pass user id' })
    readonly user: User;
}
