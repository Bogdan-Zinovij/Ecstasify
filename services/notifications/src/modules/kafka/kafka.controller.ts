import { Controller } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { EventPattern } from '@nestjs/microservices';
import { TopicEnum } from './enums';
import { HandleUserRegisteredDto } from './dto';

@Controller()
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @EventPattern(TopicEnum.NEW_USER_REGISTERED)
  handleNewUserRegistered(dto: HandleUserRegisteredDto) {
    this.kafkaService.handleNewUserRegistered(dto);
  }
}
