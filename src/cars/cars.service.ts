import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CarQueryDto } from './dto/car-query.dto';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(createCarDto: CreateCarDto) {
    try {
      return await this.knex.table('models').insert({ ...createCarDto });
    } catch (error) {
      throw new HttpException('Car model not created', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: CarQueryDto) {
    try {
      const db_query = this.knex.table('models').select('*');
      if (Object.keys(query).length > 0 && query.company_id !== undefined)
        return await db_query.where({ ...query });
      return await db_query.limit(10);
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.knex.table('models').select('*').where({ id: id });
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    try {
      return await this.knex
        .table('models')
        .update({ ...updateCarDto })
        .where({ id: id });
    } catch (error) {
      throw new HttpException('Not updated', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      return await this.knex.table('models').del().where({ id: id });
    } catch (error) {
      throw new HttpException('Not deleted', HttpStatus.BAD_REQUEST);
    }
  }
}
