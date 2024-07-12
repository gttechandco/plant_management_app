/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { Plant } from './plants.entity';

@Controller('plants')
export class PlantsController {
    constructor(private readonly plantsService: PlantsService) {}

    // Méthodes acceptées par le constructeur
        
    @Get()
    findAll(): Promise<Plant[]> {
        return this.plantsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Plant> {
        return this.plantsService.findOne(id);
    }

    @Post()
    create(@Body() plant: Plant): Promise<Plant> {
        return this.plantsService.create(plant);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() plant: Plant): Promise<void> {
        return this.plantsService.update(id, plant);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.plantsService.remove(id);
    }
}
