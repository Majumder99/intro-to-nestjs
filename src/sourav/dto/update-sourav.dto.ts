import { PartialType } from '@nestjs/mapped-types';
import { CreateSouravDto } from './create-sourav.dto';

export class UpdateSouravDto extends PartialType(CreateSouravDto) {}
