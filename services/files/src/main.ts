import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const HOST = configService.get('NEST_HOST');
  const PORT = configService.get('NEST_PORT');
  const GLOBAL_PREFIX = configService.get('GLOBAL_PREFIX');

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT, HOST, () => {
    console.log(`Server listens on http://${HOST}:${PORT}`);
  });
}
bootstrap();
