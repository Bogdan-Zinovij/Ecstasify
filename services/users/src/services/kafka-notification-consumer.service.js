import { Kafka } from 'kafkajs';
import { errorMessages, kafkaTopics, KAFKA_GROUP_ID } from '../config.js';
import * as dotenv from 'dotenv';
import userService from './user.service.js';
import UserNotificationDto from '../dtos/user-notification.dto.js';
dotenv.config();

export default class KafkaNotifConsumerService {
  constructor() {
    const kafka = new Kafka({
      clientId: process.env.CLIENT_ID,
      brokers: [process.env.KAFKA_URL],
    });
    this.consumer = kafka.consumer({ groupId: KAFKA_GROUP_ID });
  }

  async connect() {
    try {
      await this.consumer.connect();
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_CONNECT + err);
    }
  }

  async subscribe() {
    try {
      const topic = kafkaTopics.SUCCESSFUL_REGISTRATION;
      await this.consumer.subscribe({
        topic,
        fromBeginning: true,
      });
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_SUBSCRIBE + err);
    }
  }

  async run(notificationProducer) {
    try {
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          if (topic === kafkaTopics.GET_ALL_USERS) {
            const users = await userService.getUsers();
            const usersDto = users.map((user) => {
              return new UserNotificationDto(user);
            });
            notificationProducer.sendAllUsers(usersDto);
          }
        },
      });
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_RUN_CONSUMER + err);
    }
  }

  async setup(notificationProducer) {
    await this.connect();
    await this.subscribe();
    await this.run(notificationProducer);
  }
}
