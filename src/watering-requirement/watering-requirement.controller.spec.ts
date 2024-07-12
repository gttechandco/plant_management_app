import { Test, TestingModule } from '@nestjs/testing';
import { WateringRequirementController } from './watering-requirement.controller';

describe('WateringRequirementController', () => {
  let controller: WateringRequirementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WateringRequirementController],
    }).compile();

    controller = module.get<WateringRequirementController>(WateringRequirementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
