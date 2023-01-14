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
import {
  CreateSubscriptionFeatureDto,
  UpdateSubscriptionFeatureDto,
} from '../dto';
import { SubscriptionFeatureEntity } from '../entities';
import { SubscriptionFeaturesService } from '../services/subscription-features.service';

@Controller('subscription-features')
export class SubscriptionFeaturesController {
  constructor(
    private readonly subscriptionFeaturesService: SubscriptionFeaturesService,
  ) {}

  @Get()
  findAll(): Promise<SubscriptionFeatureEntity[]> {
    return this.subscriptionFeaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param() conditions: ID): Promise<SubscriptionFeatureEntity> {
    return this.subscriptionFeaturesService.findOne(conditions);
  }

  @Post()
  createOne(
    @Body() createEntityDto: CreateSubscriptionFeatureDto,
  ): Promise<SubscriptionFeatureEntity> {
    return this.subscriptionFeaturesService.createOne(createEntityDto);
  }

  @Patch(':id')
  updateOne(
    @Param() conditions: ID,
    @Body() updateEntityDto: UpdateSubscriptionFeatureDto,
  ) {
    return this.subscriptionFeaturesService.updateOne(
      conditions,
      updateEntityDto,
    );
  }

  @Delete(':id')
  deleteOne(@Param() conditions: ID) {
    return this.subscriptionFeaturesService.deleteOne(conditions);
  }
}
