import { GrpcMethod } from "@nestjs/microservices";
import { UsersService } from './users.service';
import { Controller } from "@nestjs/common";
import { User } from './user.model';
import { NewUser, UserById } from './user.interface';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @GrpcMethod('UserController', 'CreateUser')
  createUser(data: NewUser, metadata: any): Promise<User> {
    return this.userService.create(data);
  }

  @GrpcMethod('UserController', 'FindOne')
  findOne(user: UserById): Promise<User> {
    return this.userService.findOne(user.id);
  }
}