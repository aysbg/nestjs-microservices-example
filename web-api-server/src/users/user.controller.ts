import { Controller, Logger, Post, Body, OnModuleInit, Get, Param } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

interface ICreatedUser {
  id: number
  name: string
  email: string
}

interface INewUser {
  name: string
  email: string
}

@Controller('users')
export class UserController implements OnModuleInit {
  private logger = new Logger('UserController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('UserController');
  }

  @Post('create')
  async createUser(@Body() data: INewUser) {
    console.log(data);
    this.logger.log('Creating user');
    return this.grpcService.createUser(data);
  }

  @Get(':id')
  findOne(@Param() params): ICreatedUser {
    return this.grpcService.findOne({ id: params.id });
  }
}