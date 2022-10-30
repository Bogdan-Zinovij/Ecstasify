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
import { SubscriptionPlanEntity } from '../entities';
import { SubscriptionPlansService } from '../services/subscription-plans.service';

@Controller('subscriptions/subscription-plans')
export class SubscriptionPlansController {
  constructor(
    private readonly subscriptionPlansService: SubscriptionPlansService,
  ) {}

  @Get()
  findAll(): Promise<SubscriptionPlanEntity[]> {
    return this.subscriptionPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param() conditions: ID): Promise<SubscriptionPlanEntity> {
    return this.subscriptionPlansService.findOne(conditions);
  }

  @Post()
  createOne(
    @Body() createEntityDto: CreateSubscriptionPlanDto,
  ): Promise<SubscriptionPlanEntity> {
    return this.subscriptionPlansService.createOne(createEntityDto);
  }

  @Patch(':id')
  updateOne(
    @Param() conditions: ID,
    @Body() updateEntityDto: UpdateSubscriptionPlanDto,
  ) {
    return this.subscriptionPlansService.updateOne(conditions, updateEntityDto);
  }

  @Delete(':id')
  deleteOne(@Param() conditions: ID) {
    return this.subscriptionPlansService.deleteOne(conditions);
  }
}
