import { Module } from '@nestjs/common';
import { WateringHistoryService } from './watering-history.service';
import { WateringHistoryController } from './watering-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WateringHistory } from './watering-history.entity';

@Module({
  providers: [WateringHistoryService],
  controllers: [WateringHistoryController],
  imports: [TypeOrmModule.forFeature([WateringHistory])],
})
export class WateringHistoryModule {}
