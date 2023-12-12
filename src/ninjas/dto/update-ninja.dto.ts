import { PartialType } from '@nestjs/mapped-types';
import { CreateninjaDto } from './create-ninja.dto';

export class UpdateNinjaDto extends PartialType(CreateninjaDto) {}
