import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CompanyQueryDto } from './dto/company-query.dto';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Make')
@Controller('make')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  // @Post()
  // @HttpCode(201)
  // create(@Body() createCompanyDto: CreateCompanyDto) {
  //   return this.companiesService.create(createCompanyDto);
  // }

  @Get()
  @HttpCode(200)
  findAll(@Query() query: CompanyQueryDto) {
    return this.companiesService.findAll(query);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  // @Patch(':id')
  // @HttpCode(200)
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companiesService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // @HttpCode(200)
  // remove(@Param('id') id: string) {
  //   return this.companiesService.remove(+id);
  // }
}
