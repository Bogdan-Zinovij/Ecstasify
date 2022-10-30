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
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [dirname(__dirname) + '/modules/**/*.entity.{ts,js}'],
      migrations: [__dirname + '/migrations/*.{ts,js}'],
      migrationsRun: true,
      dropSchema: false,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
