import { Module } from '@nestjs/common';
import { SubscriptionPlansService } from './services/subscription-plans.service';
import { SubscriptionPlansController } from './controllers/subscription-plans.controller';
import { SubscriptionPlanEntity } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionPlanEntity])],
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService],
  exports: [SubscriptionPlansService],
})
export class SubscriptionsModule {}
