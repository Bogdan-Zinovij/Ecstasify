import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MailContextInterface } from '../mail/interfaces/mail-context.interface';
import { MailService } from '../mail/mail.service';
import {
  GetUserDto,
  HandleNewTrackCreatedDto,
  HandleUserRegisteredDto,
} from './dto';
import { TopicEnum } from './enums';
import { KafkaMessageInterface } from './interfaces';
import { CLIENT_KAFKA_SERVICE_NAME } from './kafka.constants';

@Injectable()
export class KafkaService {
  constructor(
    @Inject(CLIENT_KAFKA_SERVICE_NAME)
    private readonly clientKafka: ClientKafka,
    private readonly mailService: MailService,
  ) {}

  subscribeToResponseOf(topic: TopicEnum) {
    this.clientKafka.subscribeToResponseOf(topic);
  }

  handleNewUserRegistered(value: string) {
    const user: HandleUserRegisteredDto = JSON.parse(value);
    console.log('\n\n User recieved: ', user, '\n\n');
    const { name, email } = user;

    const context: MailContextInterface = {
      name,
    };

    this.mailService.sendTemplatedMail('user-registered', [email], context);
  }

  handleNewTrackCreated(value: string) {
    console.log('\n\n Track recieved: ', value, '\n\n');
    const track: HandleNewTrackCreatedDto = JSON.parse(value);
    this.clientKafka
      .send(TopicEnum.GET_ALL_USERS, {})
      .subscribe((message: KafkaMessageInterface) => {
        const users: GetUserDto[] = JSON.parse(message?.value);

        console.log('\n\n Users recieved: ', users, '\n\n');

        const emails = users.map((user) => user.email);

        const context: MailContextInterface = {
          trackName: track?.name,
        };

        this.mailService.sendTemplatedMail('track-created', emails, context);
      });
  }
}
