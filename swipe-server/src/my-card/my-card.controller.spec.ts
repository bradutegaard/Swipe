import { Test, TestingModule } from '@nestjs/testing';
import { MyCardController } from './my-card.controller';

describe('MyCard Controller', () => {
  let controller: MyCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyCardController],
    }).compile();

    controller = module.get<MyCardController>(MyCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
