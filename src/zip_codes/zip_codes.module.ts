import { Module } from '@nestjs/common';
import { ZipCodesService } from './zip_codes.service';
import { ZipCodesController } from './zip_codes.controller';

@Module({
  controllers: [ZipCodesController],
  providers: [ZipCodesService],
})
export class ZipCodesModule {}
