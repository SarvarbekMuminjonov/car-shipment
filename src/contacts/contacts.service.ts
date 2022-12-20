import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
// import { UpdateContactDto } from './dto/update-contact.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContactsService {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}
  async create(createContactDto: CreateContactDto) {
    try {
      const token = this.config.get('token');
      const chatId = '-1001544371098';
      const fullText = `\u{1F60A} Full Name: ${createContactDto.name}
                            %0A\u{2709} Email: ${createContactDto.email} 
                            %0A\u{260E} Phone Number: ${createContactDto.phone} 
                            %0A\u{1F4DC} Comments: ${createContactDto.comment};`;

      await this.http.axiosRef.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`,
      );
    } catch (error) {
      throw new HttpException('Not sended', HttpStatus.BAD_REQUEST);
    }
  }

  // findAll() {
  //   return `createContactDto action returns all contacts`;
  // }

  // findOne(id: number) {
  //   return `createContactDto action returns a #${id} contact`;
  // }

  // update(id: number, updateContactDto: UpdateContactDto) {
  //   return `createContactDto action updates a #${id} contact`;
  // }

  // remove(id: number) {
  //   return `createContactDto action removes a #${id} contact`;
  // }
}
