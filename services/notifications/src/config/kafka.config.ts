import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const kafkaConfig = {
  getConfig(host: string, port: string): MicroserviceOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [`${host}:${port}`],
        },
      },
    };
  },
};
