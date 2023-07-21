import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcordesService } from './acordes.service';
import { CreateAcordeDto } from './dto/create-acorde.dto';
import { UpdateAcordeDto } from './dto/update-acorde.dto';

@Controller('api/acordes')
export class AcordesController {
  constructor(private readonly acordesService: AcordesService) {}

  @Post()
  create(@Body() body: any) {
    return this.acordesService.create(body);
  }

  @Get()
  findAll() {
    return this.acordesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acordesService.findOne(+id);
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
