import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailModule } from '../mail/mail.module';
import { CLIENT_KAFKA_SERVICE_NAME } from './kafka.constants';
import { KafkaController } from './kafka.controller';
import { KafkaService } from './kafka.service';

@Module({
  imports: [
    ConfigModule,
    MailModule,
    ClientsModule.registerAsync([
      {
        name: CLIENT_KAFKA_SERVICE_NAME,
        useFactory: async (configService: ConfigService) => ({
          name: configService.get('KAFKA_SERVICE_NAME'),
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: configService.get('KAFKA_CLIENT_ID'),
              brokers: [
                `${configService.get('KAFKA_HOST_VALUE')}:${configService.get(
                  'KAFKA_PORT_VALUE',
                )}`,
              ],
            },
            consumer: {
              groupId: configService.get('KAFKA_CONSUMER_GROUP_ID'),
            },
          },
        }),
        imports: [ConfigModule],
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [KafkaController],
  providers: [KafkaService],
})
export class KafkaModule {}
