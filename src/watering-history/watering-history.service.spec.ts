import { Test, TestingModule } from '@nestjs/testing';
import { WateringHistoryService } from './watering-history.service';

describe('WateringHistoryService', () => {
  let service: WateringHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WateringHistoryService],
    }).compile();

    service = module.get<WateringHistoryService>(WateringHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
