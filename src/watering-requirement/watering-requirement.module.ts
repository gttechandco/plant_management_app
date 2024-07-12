import { Module } from '@nestjs/common';
import { WateringRequirementService } from './watering-requirement.service';
import { WateringRequirementController } from './watering-requirement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WateringRequirement } from './watering-requirement.entity';

@Module({
  providers: [WateringRequirementService],
  controllers: [WateringRequirementController],
  imports: [TypeOrmModule.forFeature([WateringRequirement])],
})
export class WateringRequirementModule {}
