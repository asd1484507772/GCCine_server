import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from 'typeorm';
import { Seat } from '../seat/seat.entity';

@Entity('halls')
export class Hall {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  specs: {
    rows: number;
    cols: number;
  };

  @OneToMany(() => Seat, (seat) => seat.hall)
  seats: Seat[];
}
