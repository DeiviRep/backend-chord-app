import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AcordesModule } from './chords/acordes/acordes.module';
import { UsuariosModule } from './chords/usuarios/usuarios.module';
import { Acorde } from './chords/acordes/entities/acorde.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Acorde],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    AcordesModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
