import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CarQueryDto {
  @IsOptional()
  @IsString()
  model_name?: string;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  company_id?: number;
}
