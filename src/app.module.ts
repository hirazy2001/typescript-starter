import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
