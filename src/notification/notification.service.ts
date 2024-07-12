/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>
    ) {}

    // Opération CRUD et implémentation des fonctionnalités

    // Lister toutes les notifications
    findAll(): Promise<Notification[]> {
        return this.notificationRepository.find({ relations: ['plant']});
    }

    // Lister Une notification par ID
    findOne(id: number): Promise<Notification> {
        return this.notificationRepository.findOne({
            where: { id },
            relations: ['plant'],
        });
    }

    // Ajouter une nouvelle notification
    create(notif: Notification): Promise<Notification>{
        return this.notificationRepository.save(notif);
    }

    // Mettre à jour une notification
    async update(id: number, notif: Notification): Promise<void> {
        await this.notificationRepository.update(id, notif);
    }

    // Supprimer une notification
    async remove(id: number): Promise<void> {
        await this.notificationRepository.delete(id);
    }
}
