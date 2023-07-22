import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcordeDto } from './dto/create-acorde.dto';
import { UpdateAcordeDto } from './dto/update-acorde.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acorde } from './entities/acorde.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcordesService {
  constructor(
    @InjectRepository(Acorde)
    private readonly acordeRepo: Repository<Acorde>,
  ) {}

  // create(body: any) {
  //   const newAcorde = this.acordeRepo.create(body);
  //   return this.acordeRepo.save(newAcorde);
  // }
  async create(createAcordeDto: CreateAcordeDto): Promise<Acorde> {
    const newAcorde = this.acordeRepo.create(createAcordeDto);
    return this.acordeRepo.save(newAcorde);
  }

  async findAll(): Promise<Acorde[]> {
    return this.acordeRepo.find();
  }

  async findOne(id: number): Promise<Acorde | undefined> {
    return this.acordeRepo.findOneBy({ id });
  }

  async update(id: number, updateAcordeDto: UpdateAcordeDto): Promise<Acorde> {
    const dataAcorde = await this.acordeRepo.findOneBy({ id });
    if (!dataAcorde) {
      throw new NotFoundException('No se encontró la entidad');
    }
    Object.assign(dataAcorde, updateAcordeDto);
    return this.acordeRepo.save(dataAcorde);
  }

  async remove(id: number): Promise<void> {
    const dataAcorde = await this.acordeRepo.findOneBy({ id });
    if (!dataAcorde) {
      throw new NotFoundException(`La entidad con el ID '${id}' no existe`);
    }
    await this.acordeRepo.remove(dataAcorde);
  }
}
