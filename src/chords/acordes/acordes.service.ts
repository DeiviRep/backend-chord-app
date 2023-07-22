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
    private acordeRepo: Repository<Acorde>,
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

  update(id: number, updateAcordeDto: UpdateAcordeDto) {
    return `This action updates a #${id} acorde`;
  }

  remove(id: number) {
    return `This action removes a #${id} acorde`;
  }
}
