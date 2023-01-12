import { Kafka } from 'kafkajs';
import * as dotenv from 'dotenv';
import { errorMessages } from '../config.js';
dotenv.config();

export default class KafkaNotifProducerService {
  constructor() {
    const kafka = new Kafka({
      clientId: process.env.CLIENT_ID,
      brokers: [process.env.KAFKA_URL],
    });
    this.producer = kafka.producer();
  }

  async connect() {
    try {
      await this.producer.connect();
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_CONNECT + err);
    }
  }

  async send(topic, data) {
    const notification = {
      topic,
      messages: [{ value: JSON.stringify(data) }],
    };
    await this.producer.send(notification).catch((err) => {
      console.error(errorMessages.KAFKA_FAILED_SEND + err);
    });
  }
}
