/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WateringHistoryService } from './watering-history.service';
import { WateringHistory } from './watering-history.entity';

@Controller('watering-history')
export class WateringHistoryController {
    constructor(private readonly wateringHistoryService: WateringHistoryService) {}

    // Méthodes acceptées par le constructeur
        
    @Get()
    findAll(): Promise<WateringHistory[]> {
        return this.wateringHistoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<WateringHistory> {
        return this.wateringHistoryService.findOne(id);
    }

    @Post()
    create(@Body() history: WateringHistory): Promise<WateringHistory> {
        return this.wateringHistoryService.create(history);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() history: WateringHistory): Promise<void> {
        return this.wateringHistoryService.update(id, history);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.wateringHistoryService.remove(id);
    }
}
