import { Test, TestingModule } from '@nestjs/testing';
import { AcordesService } from './acordes.service';

describe('AcordesService', () => {
  let service: AcordesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcordesService],
    }).compile();

    service = module.get<AcordesService>(AcordesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
