import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { Plant } from './plants.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PlantsService],
  controllers: [PlantsController],
  imports: [TypeOrmModule.forFeature([Plant])],
})
export class PlantsModule {}
