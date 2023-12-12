import { Test, TestingModule } from '@nestjs/testing';
import { SouravService } from './sourav.service';

describe('SouravService', () => {
  let service: SouravService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SouravService],
    }).compile();

    service = module.get<SouravService>(SouravService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
