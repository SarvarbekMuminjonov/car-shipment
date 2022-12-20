import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrdersService {
  constructor(
    @InjectConnection() private readonly knex: Knex,
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      const token = this.config.get('token');
      const chatId = '-1001828502194';
      const fullText = `\u{1F60A} Full Name: ${
        createOrderDto.name
      } %0A\u{2709} Email: ${createOrderDto.email}  %0A\u{260E} Phone Number: ${
        createOrderDto.phone
      }
                  %0A\ ------------------------------------------------------
                  %0A\u{1F6EB} From: ${createOrderDto.from} %0A\u{1F6EC} To: ${
        createOrderDto.to
      } %0A\u{1F69B} Transport type: ${
        createOrderDto.transport_type
      }  %0A\u{1F4C5} Estimate time: ${createOrderDto.estimate_time}
                  %0A\ ------------------------------------------------------
                  %0A\u{1F697} Year: ${
                    createOrderDto.year
                  }  %0A\u{1F697} Make: ${
        createOrderDto.make
      } %0A\u{1F697} Model: ${createOrderDto.model}  ${
        createOrderDto.vehicle === 'run' ? '%0A\u{2705}' : '%0A\u{274C}'
      } Status: ${createOrderDto.vehicle};`;

      await this.http.axiosRef.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`,
      );
      return await this.knex.table('orders').insert({ ...createOrderDto });
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
