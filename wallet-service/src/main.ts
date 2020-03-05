import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('WalletService');

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379'
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log('WalletService is listening...');
  });
}

bootstrap();