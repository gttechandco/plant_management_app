/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { WateringRequirementModule } from './watering-requirement/watering-requirement.module';
import { WateringHistoryModule } from './watering-history/watering-history.module';
import { NotificationModule } from './notification/notification.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './plants/plants.entity';
import { WateringHistory } from './watering-history/watering-history.entity';
import { WateringRequirement } from './watering-requirement/watering-requirement.entity';
import { Notification } from './notification/notification.entity';

@Module({
  imports: [
    PlantsModule, 
    WateringRequirementModule, 
    WateringHistoryModule, 
    NotificationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestadmin',
      password: 'nestadmin',
      database: 'plants',
      entities: [Plant, WateringHistory, WateringRequirement, Notification],
      synchronize: true, // Ne pas oublier de passer sur faux en production
    }),
    TypeOrmModule.forFeature([Plant, WateringHistory, WateringRequirement, Notification]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
