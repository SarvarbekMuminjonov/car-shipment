import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
  Query,
} from '@nestjs/common';
import { ZipCodesService } from './zip_codes.service';
// import { CreateZipCodeDto } from './dto/create-zip_code.dto';
// import { UpdateZipCodeDto } from './dto/update-zip_code.dto';
import { ZipQueryDto } from './dto/zip-query.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Zip Codes')
@Controller('zip-codes')
export class ZipCodesController {
  constructor(private readonly zipCodesService: ZipCodesService) {}

  // @Post()
  // create(@Body() createZipCodeDto: CreateZipCodeDto) {
  //   return this.zipCodesService.create(createZipCodeDto);
  // }

  @Get()
  findAll(@Query() query: ZipQueryDto) {
    return this.zipCodesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zipCodesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateZipCodeDto: UpdateZipCodeDto) {
  //   return this.zipCodesService.update(+id, updateZipCodeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.zipCodesService.remove(+id);
  // }
}
