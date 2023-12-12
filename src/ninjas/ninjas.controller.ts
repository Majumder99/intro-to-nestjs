import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateninjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas') //this my route /ninjas
export class NinjasController {
  // GET /ninjas/:id - returns a ninja with the given id
  //   @Get()
  //   getNinjas() {
  //     return 'All ninjas';
  //   }
  service = new NinjasService();

  // GET /ninjas - returns all ninjas
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return `Ninja with id ${id}`;
  }

  // GET /ninjas?type=fast - returns all ninjas
  @Get()
  getTypeNinja(@Query('weapon') weapon: string) {
    return this.service.getTypeNinja(weapon);
  }
  // POST /ninjas - creates a new ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateninjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }
  // PUT /ninjas/:id - updates a ninja with the given id
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return `Ninja with id ${id} updated`;
  }
  // DELETE /ninjas/:id - deletes a ninja with the given id\
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return `Ninja with id ${id} deleted`;
  }
}
