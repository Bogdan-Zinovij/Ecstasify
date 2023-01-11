import { Controller, OnModuleInit } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { EventPattern } from '@nestjs/microservices';
import { TopicEnum } from './enums';
import { KafkaMessageInterface } from './interfaces';

@Controller()
export class KafkaController implements OnModuleInit {
  constructor(private readonly kafkaService: KafkaService) {}

  @EventPattern(TopicEnum.NEW_USER_REGISTERED)
  handleNewUserRegistered(message: KafkaMessageInterface) {
    this.kafkaService.handleNewUserRegistered(message?.value);
  }

  @EventPattern(TopicEnum.NEW_TRACK_CREATED)
  handleNewTrackCreated(message: KafkaMessageInterface) {
    this.kafkaService.handleNewTrackCreated(message.value);
  }

  onModuleInit() {
    this.kafkaService.subscribeToResponseOf(TopicEnum.GET_ALL_USERS);
  }
}
