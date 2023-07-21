import { Module } from '@nestjs/common';
import { AcordesService } from './acordes.service';
import { AcordesController } from './acordes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acorde } from './entities/acorde.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acorde])],
  controllers: [AcordesController],
  providers: [AcordesService],
})
export class AcordesModule {}
