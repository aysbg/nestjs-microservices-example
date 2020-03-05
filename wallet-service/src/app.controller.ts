import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices'

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  // Response part of the Request-Response pattern
  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.appService.accumulate(data);
  }

  // Event based, fire and forget message
  @EventPattern('create_wallet')
  async handleCreation(data: Record<string, unknown>) {
    console.log(data);
  }
}
