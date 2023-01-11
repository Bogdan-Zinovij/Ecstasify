import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { kafkaConfig } from './config/kafka.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('KAFKA_HOST_VALUE');
  const port = configService.get('KAFKA_PORT_VALUE');

  app.connectMicroservice<MicroserviceOptions>(
    kafkaConfig.getConfig(host, port),
  );
  app.startAllMicroservices();
}
bootstrap();
