import { PartialType } from '@nestjs/mapped-types';
import { CreatePostagencyDto } from './create-postagency.dto';

export class UpdatePostagencyDto extends PartialType(CreatePostagencyDto) {}
