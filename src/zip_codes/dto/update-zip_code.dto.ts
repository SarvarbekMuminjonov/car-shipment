import { PartialType } from '@nestjs/mapped-types';
import { CreateZipCodeDto } from './create-zip_code.dto';

export class UpdateZipCodeDto extends PartialType(CreateZipCodeDto) {}
