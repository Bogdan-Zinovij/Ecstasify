import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ID } from 'src/common';
import { CreateSubscriptionPlanDto, UpdateSubscriptionPlanDto } from '../dto';
import { FeatureEntity } from '../entities';
import { FeaturesService } from '../services/features.service';

@Controller('subscriptions/features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  findAll(): Promise<FeatureEntity[]> {
    return this.featuresService.findAll();
  }

  @Get(':id')
  findOne(@Param() conditions: ID): Promise<FeatureEntity> {
    return this.featuresService.findOne(conditions);
  }

  @Post()
  createOne(
    @Body() createEntityDto: CreateSubscriptionPlanDto,
  ): Promise<FeatureEntity> {
    return this.featuresService.createOne(createEntityDto);
  }

  @Patch(':id')
  updateOne(
    @Param() conditions: ID,
    @Body() updateEntityDto: UpdateSubscriptionPlanDto,
  ) {
    return this.featuresService.updateOne(conditions, updateEntityDto);
  }

  @Delete(':id')
  deleteOne(@Param() conditions: ID) {
    return this.featuresService.deleteOne(conditions);
  }
}
