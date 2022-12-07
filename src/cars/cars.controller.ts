import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import { CarsService } from './cars.service';
// import { CreateCarDto } from './dto/create-car.dto';
import { CarQueryDto } from './dto/car-query.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Models')
@Controller('models')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // @Post()
  // @HttpCode(201)
  // create(@Body() createCarDto: CreateCarDto) {
  //   return this.carsService.create(createCarDto);
  // }

  @Get()
  @HttpCode(200)
  findAll(@Query() query: CarQueryDto) {
    return this.carsService.findAll(query);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  // @Patch(':id')
  // @HttpCode(200)
  // update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
  //   return this.carsService.update(+id, updateCarDto);
  // }

  // @Delete(':id')
  // @HttpCode(200)
  // remove(@Param('id') id: string) {
  //   return this.carsService.remove(+id);
  // }
}
