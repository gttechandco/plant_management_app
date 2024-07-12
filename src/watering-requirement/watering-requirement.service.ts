/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WateringRequirement } from './watering-requirement.entity';

@Injectable()
export class WateringRequirementService {
    constructor(
        @InjectRepository(WateringRequirement)
        private wateringRequirementRepository: Repository<WateringRequirement>
    ) {}

    // Opération CRUD et implémentation des fonctionnalités

    // Lister tous les besoins
    findAll(): Promise<WateringRequirement[]> {
        return this.wateringRequirementRepository.find({ relations: ['plant']});
    }

    // Lister Un besoin par ID
    findOne(id: number): Promise<WateringRequirement> {
        return this.wateringRequirementRepository.findOne({
            where: { id },
            relations: ['plant'],
        });
    }

    // Ajouter un nouveau besoin 
    create(plant: WateringRequirement): Promise<WateringRequirement>{
        return this.wateringRequirementRepository.save(plant);
    }

    // Mettre à jour un besoin
    async update(id: number, plant: WateringRequirement): Promise<void> {
        await this.wateringRequirementRepository.update(id, plant);
    }

    // Supprimer un besoin
    async remove(id: number): Promise<void> {
        await this.wateringRequirementRepository.delete(id);
    }
}
