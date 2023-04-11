import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Cinema } from '../cinema/cinema.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  row: number;

  @Column()
  column: number;

  @ManyToOne(() => Cinema, (cinema) => cinema.seats)
  @JoinColumn({ name: 'cinemaId' })
  cinema: Cinema;

  @Column()
  cinemaId: string;
}
