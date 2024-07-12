/* eslint-disable prettier/prettier */
// src/plants/plant.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { WateringRequirement } from 'src/watering-requirement/watering-requirement.entity';
import { WateringHistory } from 'src/watering-history/watering-history.entity';
import { Notification } from 'src/notification/notification.entity';

//Création du modèle des plantes
@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id: number; // Clé primaire

    @Column()
    name: string; 

    @Column()
    species: string; // espèce

    @Column({ type: 'date' })
    acquired_date: Date;

    @Column()
    picture: string; // URL ou chemin de l'image

    @OneToMany(() => WateringRequirement, wateringRequirement => wateringRequirement.plant)
    wateringRequirements: WateringRequirement[];

    @OneToMany(() => WateringHistory, wateringHistory => wateringHistory.plant)
    wateringHistories: WateringHistory[];

    @OneToMany(() => Notification, notification => notification.plant)
    notifications: Notification[];

}
