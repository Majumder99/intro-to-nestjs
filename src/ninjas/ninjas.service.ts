import { Injectable } from '@nestjs/common';
import { CreateninjaDto } from './dto/create-ninja.dto';

//  This is a service class that will be used to handle all the business logic of our application.

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'Ninja 1',
      weapon: 'Shuriken',
    },
    {
      id: 1,
      name: 'Ninja 2',
      weapon: 'Katana',
    },
    {
      id: 2,
      name: 'Ninja 3',
      weapon: 'Nunchucks',
    },
  ];

  getTypeNinja(weapon?: string) {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  createNinja(createNinjaDto: CreateninjaDto) {
    const newNinja = {
      id: this.ninjas.length + 1,
      ...createNinjaDto,
    };
    this.ninjas.push(newNinja);
    return this.ninjas;
  }

  updateNinja(id: number, updateNinjaDto: CreateninjaDto) {
    const ninja = this.ninjas.find((ninja) => ninja.id === Number(id));
    if (ninja) {
      ninja.name = updateNinjaDto.name;
      ninja.weapon = updateNinjaDto.weapon;
    }
    return this.ninjas;
  }

  deleteNinja(id: number) {
    // const tobeRemoved = this.ninjas.findIndex(
    //   (ninja) => ninja.id === Number(id),
    // );
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return this.ninjas;
  }
}
