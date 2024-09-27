import { Test, TestingModule } from '@nestjs/testing';
import { KiotvietService } from './kiotviet.service';

describe('KiotvietService', () => {
  let service: KiotvietService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KiotvietService],
    }).compile();

    service = module.get<KiotvietService>(KiotvietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
