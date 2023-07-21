import { Test, TestingModule } from '@nestjs/testing';
import { AcordesController } from './acordes.controller';
import { AcordesService } from './acordes.service';

describe('AcordesController', () => {
  let controller: AcordesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcordesController],
      providers: [AcordesService],
    }).compile();

    controller = module.get<AcordesController>(AcordesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
