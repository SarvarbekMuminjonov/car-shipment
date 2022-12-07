import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  model_name: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  company_id: number;
}
