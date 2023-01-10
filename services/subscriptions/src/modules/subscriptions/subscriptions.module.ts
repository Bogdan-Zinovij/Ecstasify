import { Module } from '@nestjs/common';
import { SubscriptionPlansService } from './services/subscription-plans.service';
import { SubscriptionPlansController } from './controllers/subscription-plans.controller';
import {
  FeatureEntity,
  SubscriptionFeatureEntity,
  SubscriptionPlanEntity,
} from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesController } from './controllers/features.controller';
import { FeaturesService } from './services/features.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubscriptionPlanEntity,
      FeatureEntity,
      SubscriptionFeatureEntity,
    ]),
  ],
  controllers: [SubscriptionPlansController, FeaturesController],
  providers: [SubscriptionPlansService, FeaturesService],
  exports: [SubscriptionPlansService, FeaturesService],
})
export class SubscriptionsModule {}
