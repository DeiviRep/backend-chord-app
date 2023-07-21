import { PartialType } from '@nestjs/mapped-types';
import { CreateAcordeDto } from './create-acorde.dto';

export class UpdateAcordeDto extends PartialType(CreateAcordeDto) {}
