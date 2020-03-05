import { Controller, Logger, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LogsService } from './logs/logs.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logsService: LogsService
  ) {}

  @Get('/health')
  async health() {
    return 'ok';
  }

  @Post('/notify')
  async sendNotification(@Body() data) {
    this.logsService.publish(data);
  }
}
