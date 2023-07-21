import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Acorde {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  categoria_acorde: string;

  @Column({ type: 'varchar', length: 500 })
  acordes_json: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}

//   @Column({ type: 'int' })
//   transporte: number;
