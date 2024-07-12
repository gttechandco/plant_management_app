/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WateringHistory } from './watering-history.entity';

@Injectable()
export class WateringHistoryService {
    constructor(
        @InjectRepository(WateringHistory)
        private wateringHistoryRepository: Repository<WateringHistory>
    ) {}

    // Opération CRUD et implémentation des fonctionnalités

    // Lister tous les arrosages
    findAll(): Promise<WateringHistory[]> {
        return this.wateringHistoryRepository.find({ relations: ['plant']});
    }

    // Lister Une entrée dans l'historique par ID
    findOne(id: number): Promise<WateringHistory> {
        return this.wateringHistoryRepository.findOne({
            where: { id },
            relations: ['plant'],
        });
    }

    // Ajouter une nouvelle entrée dans l'historique
    create(entry: WateringHistory): Promise<WateringHistory>{
        return this.wateringHistoryRepository.save(entry);
    }

    // Mettre à jour une entrée dans l'historique
    async update(id: number, entry: WateringHistory): Promise<void> {
        await this.wateringHistoryRepository.update(id, entry);
    }

    // Supprimer une entrée dans l'historique
    async remove(id: number): Promise<void> {
        await this.wateringHistoryRepository.delete(id);
    }
}
