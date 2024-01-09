import { PostagencyService } from './postagency.service';
import { UpdatePostagencyDto } from './dto/update-postagency.dto';
import { Postagency } from './postagency.model';
export declare class PostagencyController {
    private readonly postagencyService;
    constructor(postagencyService: PostagencyService);
    createPostagency(agencyDto: Postagency): Promise<Postagency>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostagencyDto: UpdatePostagencyDto): string;
    remove(id: string): string;
}
