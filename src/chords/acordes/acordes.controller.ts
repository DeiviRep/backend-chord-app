import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { AcordesService } from './acordes.service';
import { CreateAcordeDto } from './dto/create-acorde.dto';
import { UpdateAcordeDto } from './dto/update-acorde.dto';
import { Acorde } from './entities/acorde.entity';

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
  async update(
    @Param('id') id: number,
    @Body() updateAcordeDto: UpdateAcordeDto,
  ): Promise<Acorde> {
    return this.acordesService.update(id, updateAcordeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      await this.acordesService.remove(id);
      return {
        message: `La entidad con el ID '${id}' ha sido eliminada`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
