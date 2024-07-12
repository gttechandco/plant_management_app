/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { WateringRequirementService } from './watering-requirement.service';
import { WateringRequirement } from './watering-requirement.entity';

@Controller('watering-history')
export class WateringRequirementController {
    constructor(private readonly wateringRequirementService: WateringRequirementService) {}

    // Méthodes acceptées par le constructeur
        
    @Get()
    findAll(): Promise<WateringRequirement[]> {
        return this.wateringRequirementService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<WateringRequirement> {
        return this.wateringRequirementService.findOne(id);
    }

    @Post()
    create(@Body() requirement: WateringRequirement): Promise<WateringRequirement> {
        return this.wateringRequirementService.create(requirement);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() requirement: WateringRequirement): Promise<void> {
        return this.wateringRequirementService.update(id, requirement);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.wateringRequirementService.remove(id);
    }
}
