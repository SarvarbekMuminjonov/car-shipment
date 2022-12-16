import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyQueryDto } from './dto/company-query.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return await this.knex.table('companies').insert({ ...createCompanyDto });
    } catch (error) {
      throw new HttpException('Not created', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: CompanyQueryDto) {
    try {
      const db_query = this.knex.table('companies').select('*');
      if (Object.keys(query).length > 0 && query.company_name !== undefined)
        return await db_query.where({ ...query });
      return await db_query;
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      return await this.knex.table('companies').select('*').where({ id: id });
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    try {
      return await this.knex
        .table('models')
        .update({ ...updateCompanyDto })
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
