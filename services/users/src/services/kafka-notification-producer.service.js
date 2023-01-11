import { Kafka } from 'kafkajs';
import * as dotenv from 'dotenv';
import { kafkaTopics, errorMessages } from '../config.js';
dotenv.config();

export default class KafkaNotifProducerService {
  constructor() {
    const kafka = new Kafka({
      clientId: process.env.CLIENT_ID,
      brokers: [process.env.KAFKA_URL],
    });
    this.producer = kafka.producer();
    this.sendAllUsers = this.makeTopicSender(kafkaTopics.GET_ALL_USERS_REPLY);
    this.sendNewRegisteredUser = this.makeTopicSender(
      kafkaTopics.NEW_USER_REGISTERED,
    );
  }

  async connect() {
    try {
      await this.producer.connect();
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_CONNECT + err);
    }
  }

  makeTopicSender(topic) {
    return async (data) => {
      const notification = {
        topic,
        messages: [{ value: data }],
      };
      await this.producer.send(notification).catch((err) => {
        console.error(errorMessages.KAFKA_FAILED_SEND + err);
      });
    };
  }
}
