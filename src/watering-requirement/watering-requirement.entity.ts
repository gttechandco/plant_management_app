/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Plant } from "src/plants/plants.entity";

@Entity()
export class WateringRequirement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number; // La quantité sera en Litres

    @Column()
    frequency: number; // La fréquence est en jours

    @ManyToOne(() => Plant, plant => plant.wateringRequirements)
    plant: Plant;
}