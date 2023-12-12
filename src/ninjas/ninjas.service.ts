import { Injectable } from '@nestjs/common';

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
}
