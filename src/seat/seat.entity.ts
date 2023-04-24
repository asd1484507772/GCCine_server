import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Hall } from '../hall/hall.entity';

@Entity('seats')
export class Seat {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  hallId: ObjectID;

  @Column()
  no: string;

  @Column()
  status: string;

  @Column()
  price: number;

  @ManyToOne(() => Hall, (hall) => hall.seats)
  @JoinColumn({ name: 'hallId' })
  hall: Hall;
}
