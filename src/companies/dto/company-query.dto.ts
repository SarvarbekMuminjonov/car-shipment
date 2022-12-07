import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CompanyQueryDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  company_name?: string;
}
