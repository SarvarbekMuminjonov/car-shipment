import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      return await this.knex.table('orders').insert(createOrderDto);
    } catch (error) {
      throw new HttpException('Order not created', HttpStatus.BAD_REQUEST);
    }
  }

  // findAll() {
  //   return `This action returns all orders`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
