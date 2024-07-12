/* eslint-disable prettier/prettier */
// src/notifications/notification.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plant } from 'src/plants/plants.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  date: Date;

  @ManyToOne(() => Plant, plant => plant.notifications)
  plant: Plant;
}
