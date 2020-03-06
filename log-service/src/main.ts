import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RMQ_URL],
    queue: 'logs_queue',
    queueOptions: {
      durable: false
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();