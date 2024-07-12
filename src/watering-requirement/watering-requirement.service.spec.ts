import { Test, TestingModule } from '@nestjs/testing';
import { WateringRequirementService } from './watering-requirement.service';

describe('WateringRequirementService', () => {
  let service: WateringRequirementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WateringRequirementService],
    }).compile();

    service = module.get<WateringRequirementService>(WateringRequirementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
