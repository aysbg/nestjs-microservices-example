import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { WalletsModule } from './wallets/wallets.module';
import { LogsService } from './logs/logs.service';

@Module({
  imports: [UserModule, WalletsModule],
  controllers: [AppController],
  providers: [AppService, LogsService],
})
export class AppModule {}
