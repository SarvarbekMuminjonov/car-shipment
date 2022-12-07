import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  model_name: string;

  @IsNotEmpty()
  @IsNumber()
  company_id: number;
}
