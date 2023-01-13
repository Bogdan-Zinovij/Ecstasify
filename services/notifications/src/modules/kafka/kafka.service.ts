import { Injectable } from '@nestjs/common';
import { MailContextInterface } from '../mail/interfaces/mail-context.interface';
import { MailService } from '../mail/mail.service';
import { HandleUserRegisteredDto } from './dto';

@Injectable()
export class KafkaService {
  constructor(private readonly mailService: MailService) {}

  handleNewUserRegistered(user: HandleUserRegisteredDto) {
    const { name, email } = user;
    const context: MailContextInterface = {
      name,
    };
    this.mailService.sendTemplatedMail('user-registered', [email], context);
  }
}
