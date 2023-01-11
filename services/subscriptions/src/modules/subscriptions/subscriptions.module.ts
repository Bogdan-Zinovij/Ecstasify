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
import { SubscriptionFeaturesController } from './controllers/subscription-features.controller';
import { SubscriptionFeaturesService } from './services/subscription-features.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubscriptionPlanEntity,
      FeatureEntity,
      SubscriptionFeatureEntity,
    ]),
  ],
  controllers: [
    SubscriptionPlansController,
    FeaturesController,
    SubscriptionFeaturesController,
  ],
  providers: [
    SubscriptionPlansService,
    FeaturesService,
    SubscriptionFeaturesService,
  ],
  exports: [
    SubscriptionPlansService,
    FeaturesService,
    SubscriptionFeaturesService,
  ],
})
export class SubscriptionsModule {}
