import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Acorde } from './chords/acordes/entities/acorde.entity';
import { Usuario } from './chords/usuarios/entities/usuario.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [Acorde, Usuario],
  // entities: ['./src/**/entities/*.entity{.ts,.js}'],
  migrations: ['./src/database/migration/*{.ts,.js}'],
  subscribers: [],
});
