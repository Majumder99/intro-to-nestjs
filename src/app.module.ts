import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UserModule } from './user/user.module';
import { NinjasController } from './ninjas/ninjas.controller';
import { UserController } from './user/user.controller';
import { SouravModule } from './sourav/sourav.module';

@Module({
  imports: [NinjasModule, UserModule, SouravModule],
  controllers: [AppController, NinjasController, UserController],
  providers: [AppService],
})
export class AppModule {}

// we can have many app modules
