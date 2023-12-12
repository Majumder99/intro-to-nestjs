import { Module } from '@nestjs/common';
import { SouravService } from './sourav.service';
import { SouravController } from './sourav.controller';

@Module({
  controllers: [SouravController],
  providers: [SouravService],
})
export class SouravModule {}
