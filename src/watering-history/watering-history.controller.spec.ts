import { Test, TestingModule } from '@nestjs/testing';
import { WateringHistoryController } from './watering-history.controller';

describe('WateringHistoryController', () => {
  let controller: WateringHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WateringHistoryController],
    }).compile();

    controller = module.get<WateringHistoryController>(WateringHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
