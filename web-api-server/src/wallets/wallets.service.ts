import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { NewWallet } from "./wallet.interface";

@Injectable()
export class WalletsService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }

  public publish(data: NewWallet) {
    return this.client.emit<number>('create_wallet', data);
  }
}