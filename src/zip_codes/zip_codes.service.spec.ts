import { Test, TestingModule } from '@nestjs/testing';
import { ZipCodesService } from './zip_codes.service';

describe('ZipCodesService', () => {
  let service: ZipCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZipCodesService],
    }).compile();

    service = module.get<ZipCodesService>(ZipCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
