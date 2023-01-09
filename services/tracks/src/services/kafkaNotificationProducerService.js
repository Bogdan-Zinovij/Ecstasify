'use strict';

const { Kafka } = require('kafkajs');

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const KAFKA_URL = process.env.KAFKA_URL;

class KafkaNotificationProducerService {
  producer;

  constructor() {
    const kafka = new Kafka({
      clientId: CLIENT_ID,
      brokers: [KAFKA_URL],
    });
    this.producer = kafka.producer();
    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
  }

  async connect() {
    await this.producer.connect();
  }

  async send(notification) {
    await this.producer.send(notification).catch((err) => {
      console.log(err);
    })
  }
}

module.exports = { KafkaNotificationProducerService };
