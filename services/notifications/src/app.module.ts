import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
