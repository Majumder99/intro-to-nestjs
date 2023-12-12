import { Test, TestingModule } from '@nestjs/testing';
import { SouravController } from './sourav.controller';
import { SouravService } from './sourav.service';

describe('SouravController', () => {
  let controller: SouravController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SouravController],
      providers: [SouravService],
    }).compile();

    controller = module.get<SouravController>(SouravController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
