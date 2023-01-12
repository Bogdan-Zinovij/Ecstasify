import { Controller } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { EventPattern } from '@nestjs/microservices';
import { TopicEnum } from './enums';
import { KafkaMessageInterface } from './interfaces';

@Controller()
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @EventPattern(TopicEnum.NEW_USER_REGISTERED)
  handleNewUserRegistered(message: KafkaMessageInterface) {
    this.kafkaService.handleNewUserRegistered(message?.value);
  }
}
