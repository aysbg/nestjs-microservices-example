import { Controller, Post, Logger, Body } from "@nestjs/common";
import { WalletsService } from './wallets.service';
import { NewWallet } from "./wallet.interface";

@Controller('wallets')
export class WalletsController {
  private logger = new Logger('AppController');

  constructor(
    private readonly walletsService: WalletsService
  ) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Numbers to add: ' + data.toString()); // log something
    return this.walletsService.accumulate(data); // send message
  }

  @Post('create')
  async createWallet(@Body() data: NewWallet) {
    return this.walletsService.publish(data);
  }
}