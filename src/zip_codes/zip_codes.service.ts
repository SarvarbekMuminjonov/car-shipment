import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
// import { CreateZipCodeDto } from './dto/create-zip_code.dto';
// import { UpdateZipCodeDto } from './dto/update-zip_code.dto';
import { ZipQueryDto } from './dto/zip-query.dto';

@Injectable()
export class ZipCodesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  // create(createZipCodeDto: CreateZipCodeDto) {
  //   return 'This action adds a new zipCode';
  // }

  async findAll(query: ZipQueryDto) {
    try {
      const db_query = this.knex.table('zip_codes').select('*');
      if (query) return await db_query.where(query);
      return db_query;
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.knex.table('zip_codes').select('*').where({ id: id });
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  // update(id: number, updateZipCodeDto: UpdateZipCodeDto) {
  //   return `This action updates a #${id} zipCode`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} zipCode`;
  // }
}
