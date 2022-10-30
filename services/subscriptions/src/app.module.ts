import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';

@Module({
  imports: [DatabaseModule, SubscriptionsModule],
})
export class AppModule {}
