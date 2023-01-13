import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './database/database.module';
import { STATIC_FOLDER_PATH } from './modules/files/files.constants';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: STATIC_FOLDER_PATH,
    }),
    ,
    DatabaseModule,
    FilesModule,
  ],
})
export class AppModule {}
