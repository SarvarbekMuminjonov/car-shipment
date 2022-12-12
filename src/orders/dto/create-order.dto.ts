import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { TransportType, Vehicle } from 'src/types/enums';

export class CreateOrderDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  from: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  to: string;

  @ApiProperty({ type: String })
  @IsPhoneNumber('US')
  @IsString()
  phone: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  estimate_time: string;

  @ApiProperty({ enum: TransportType })
  @IsNotEmpty()
  @IsString()
  transport_type: TransportType;

  @ApiProperty({ enum: Vehicle })
  @IsNotEmpty()
  @IsString()
  vehicle: Vehicle;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  year: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  make: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
