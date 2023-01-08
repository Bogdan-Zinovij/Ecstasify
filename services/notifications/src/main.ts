import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8080;
  const HOST = '127.0.0.1';
  const GLOBAL_PREFIX = '/api/v1/notifications';

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT, () => {
    console.log(`Server listens on http://${HOST}:${PORT}`);
  });
}
bootstrap();
