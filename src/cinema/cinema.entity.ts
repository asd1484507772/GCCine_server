import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Session } from '../session/session.entity';
import { Seat } from '../seat/seat.entity';

/*
id：一个唯一的UUID，作为电影院的主键。
name：电影院的名称。
address：电影院的地址。
description：电影院的描述（可选）。
*/

@Entity()
export class Cinema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Session, (session) => session.cinema, {
    cascade: true,
  })
  sessions: Session[];
  seats: Seat[];
}
