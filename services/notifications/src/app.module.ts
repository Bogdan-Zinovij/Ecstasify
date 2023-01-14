import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './modules/mail/mail.module';
import { KafkaModule } from './modules/kafka/kafka.module';

@Module({
  imports: [ConfigModule.forRoot(), MailModule, KafkaModule],
})
export class AppModule {}
