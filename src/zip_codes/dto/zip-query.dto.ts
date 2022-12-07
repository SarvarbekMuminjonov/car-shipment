import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ZipQueryDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  zip?: string;
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  state?: string;
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  county?: string;
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  country?: string;
}
