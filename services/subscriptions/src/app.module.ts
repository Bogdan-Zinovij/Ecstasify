import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, SubscriptionsModule],
})
export class AppModule {}
