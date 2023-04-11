const {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} = require('typeorm');
import { Cinema } from '../cinema/cinema.entity';
import { Movie } from '../movie/movie.entity';
import { Order } from '../order/order.entity';

/*

id：一个唯一的UUID，作为场次的主键。
startTime：场次的开始时间。
endTime：场次的结束时间。

*/

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => Cinema, (cinema) => cinema.sessions)
  cinema: Cinema;

  @ManyToOne(() => Movie, (movie) => movie.sessions)
  movie: Movie;
  orders: Order[];
}
