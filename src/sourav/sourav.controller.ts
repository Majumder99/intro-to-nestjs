import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SouravService } from './sourav.service';
import { CreateSouravDto } from './dto/create-sourav.dto';
import { UpdateSouravDto } from './dto/update-sourav.dto';

@Controller('sourav')
export class SouravController {
  constructor(private readonly souravService: SouravService) {}

  @Post()
  create(@Body() createSouravDto: CreateSouravDto) {
    return this.souravService.create(createSouravDto);
  }

  @Get()
  findAll() {
    return this.souravService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.souravService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSouravDto: UpdateSouravDto) {
    return this.souravService.update(+id, updateSouravDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.souravService.remove(+id);
  }
}
