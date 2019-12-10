import { Test, TestingModule } from '@nestjs/testing';
import { MyCardService } from './my-card.service';

describe('MyCardService', () => {
  let service: MyCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyCardService],
    }).compile();

    service = module.get<MyCardService>(MyCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
