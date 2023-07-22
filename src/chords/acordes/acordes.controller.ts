import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AcordesService } from './acordes.service';
import { CreateAcordeDto } from './dto/create-acorde.dto';
import { UpdateAcordeDto } from './dto/update-acorde.dto';

@Controller('api/acordes')
export class AcordesController {
  constructor(private readonly acordesService: AcordesService) {}

  @Post()
  async create(@Body() createAcordeDto: CreateAcordeDto) {
    try {
      const newAcorde = await this.acordesService.create(createAcordeDto);
      return {
        message: 'Nuevo acorde creado',
        data: newAcorde,
      };
    } catch (error) {
      throw new HttpException(
        'Error al crear la entidad',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    return this.acordesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.acordesService.findOne(+id);
    if (!data) {
      return {
        message: `El acorde con ID ${id} no fue encontrada.`,
      };
    }
    return {
      message: 'Acorde Encontrado',
      data: data,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcordeDto: UpdateAcordeDto) {
    return this.acordesService.update(+id, updateAcordeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acordesService.remove(+id);
  }
}
