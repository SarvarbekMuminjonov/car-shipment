import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CarQueryDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  model_name?: string;

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  company_id?: number;
}
