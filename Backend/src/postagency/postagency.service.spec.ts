import { Test, TestingModule } from '@nestjs/testing';
import { PostagencyService } from './postagency.service';

describe('PostagencyService', () => {
  let service: PostagencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostagencyService],
    }).compile();

    service = module.get<PostagencyService>(PostagencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
