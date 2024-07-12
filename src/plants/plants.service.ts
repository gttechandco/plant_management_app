/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from './plants.entity';

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(Plant)
        private plantsRepository: Repository<Plant>
    ) {}

    // Opération CRUD et implémentation des fonctionnalités

    findAll(): Promise<Plant[]> {
        return this.plantsRepository.find({
            relations: ['wateringRequirements', 'wateringHistories', 'notifications'],
        });
    }
    
    findOne(id: number): Promise<Plant> {
        return this.plantsRepository.findOne({
            where: { id },
            relations: ['wateringRequirements', 'wateringHistories', 'notifications'],
        });
    }

    // Ajouter une nouvelle plante
    create(plant: Plant): Promise<Plant>{
        return this.plantsRepository.save(plant);
    }

    // Mettre à jour une plante
    async update(id: number, plant: Plant): Promise<void> {
        await this.plantsRepository.update(id, plant);
    }

    // Supprimer une plante
    async remove(id: number): Promise<void> {
        await this.plantsRepository.delete(id);
    }
}
