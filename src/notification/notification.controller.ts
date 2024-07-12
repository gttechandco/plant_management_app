/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationsService: NotificationService) {}

    // Méthodes acceptées par le constructeur
        
    @Get()
    findAll(): Promise<Notification[]> {
        return this.notificationsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Notification> {
        return this.notificationsService.findOne(id);
    }

    @Post()
    create(@Body() notif: Notification): Promise<Notification> {
        return this.notificationsService.create(notif);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() notif: Notification): Promise<void> {
        return this.notificationsService.update(id, notif);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.notificationsService.remove(id);
    }
}
