/* eslint-disable prettier/prettier */
// src/watering-histories/watering-history.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plant } from 'src/plants/plants.entity';

@Entity()
export class WateringHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @ManyToOne(() => Plant, plant => plant.wateringHistories)
    plant: Plant;
}
