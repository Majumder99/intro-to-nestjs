import { Injectable } from '@nestjs/common';
import { CreateSouravDto } from './dto/create-sourav.dto';
import { UpdateSouravDto } from './dto/update-sourav.dto';

@Injectable()
export class SouravService {
  create(createSouravDto: CreateSouravDto) {
    return 'This action adds a new sourav';
  }

  findAll() {
    return `This action returns all sourav`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sourav`;
  }

  update(id: number, updateSouravDto: UpdateSouravDto) {
    return `This action updates a #${id} sourav`;
  }

  remove(id: number) {
    return `This action removes a #${id} sourav`;
  }
}
