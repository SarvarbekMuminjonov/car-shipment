import { IsOptional, IsString } from 'class-validator';

export class CompanyQueryDto {
  @IsOptional()
  @IsString()
  company_name?: string;
}
