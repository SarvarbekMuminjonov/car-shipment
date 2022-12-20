import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ type: String, default: 'Jhon Doe' })
  @IsString()
  name: string;
  @ApiProperty({ type: String, default: 'example@gmail.com' })
  @IsEmail()
  @IsString()
  email: string;
  @ApiProperty({ type: String, default: '+1234567890' })
  @IsString()
  phone: string;
  @ApiProperty({ type: String })
  @IsString()
  comment: string;
}
