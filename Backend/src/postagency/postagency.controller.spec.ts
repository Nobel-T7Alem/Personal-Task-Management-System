import { Test, TestingModule } from '@nestjs/testing';
import { PostagencyController } from './postagency.controller';
import { PostagencyService } from './postagency.service';

describe('PostagencyController', () => {
  let controller: PostagencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostagencyController],
      providers: [PostagencyService],
    }).compile();

    controller = module.get<PostagencyController>(PostagencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
