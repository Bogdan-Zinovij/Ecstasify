import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get('PREFIX'));

  const PORT = configService.get('PORT');
  const HOST = configService.get('HOST');

  await app.listen(PORT, HOST, () => {
    console.log(`Server listens on http://${HOST}:${PORT}`);
  });
}
bootstrap();
