import { Module } from '@nestjs/common';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';

@Module({
  imports: [SubscriptionsModule],
})
export class AppModule {}
