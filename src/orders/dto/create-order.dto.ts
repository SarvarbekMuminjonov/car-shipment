import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;

  @IsPhoneNumber('US')
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  estimate_time: string;

  @IsNotEmpty()
  @IsString()
  transport_type: string;

  @IsNotEmpty()
  @IsString()
  vehicle: string;

  @IsNotEmpty()
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsString()
  make: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
