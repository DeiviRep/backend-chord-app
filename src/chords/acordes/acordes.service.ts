import { Injectable } from '@nestjs/common';
import { CreateAcordeDto } from './dto/create-acorde.dto';
import { UpdateAcordeDto } from './dto/update-acorde.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acorde } from './entities/acorde.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcordesService {
  constructor(
    @InjectRepository(Acorde)
    private acordeRepo: Repository<Acorde>,
  ) {}

  create(body: any) {
    const newAcorde = this.acordeRepo.create(body);
    return this.acordeRepo.save(newAcorde);
  }

  findAll() {
    return `This action returns all acordes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acorde`;
  }

  update(id: number, updateAcordeDto: UpdateAcordeDto) {
    return `This action updates a #${id} acorde`;
  }

  remove(id: number) {
    return `This action removes a #${id} acorde`;
  }
}
