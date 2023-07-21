import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nombreUsuario: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  correoElectronico: string;

  @Column({ type: 'varchar', length: 100 })
  contraseña: string; // Se recomienda almacenarla en forma de hash

  // Otros campos que puedas necesitar, como preferencias, progreso, etc.
}
