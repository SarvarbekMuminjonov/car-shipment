import { Test, TestingModule } from '@nestjs/testing';
import { ZipCodesController } from './zip_codes.controller';
import { ZipCodesService } from './zip_codes.service';

describe('ZipCodesController', () => {
  let controller: ZipCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZipCodesController],
      providers: [ZipCodesService],
    }).compile();

    controller = module.get<ZipCodesController>(ZipCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
