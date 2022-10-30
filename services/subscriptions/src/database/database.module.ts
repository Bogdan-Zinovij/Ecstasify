import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      logging: true,
      username: 'ZGVtbw==',
      password: 'ZGVtbw==',
      database: 'demo',
      entities: [dirname(__dirname) + '/modules/**/*.entity.{ts,js}'],
      migrations: [__dirname + '/migrations/*.{ts,js}'],
      migrationsRun: false,
      dropSchema: false,
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
