import { Entity, ObjectIdColumn, ObjectID, Column, ManyToOne } from 'typeorm';

import { Cinema } from '../cinema/cinema.entity';
import { Movie } from '../movie/movie.entity';
import { Order } from '../order/order.entity';

/*

id：一个唯一的UUID，作为场次的主键。
startTime：场次的开始时间。
endTime：场次的结束时间。

*/

@Entity('sessions')
export class Session {
  @ObjectIdColumn()
  id: ObjectID;

  @ObjectIdColumn()
  movieId: ObjectID;

  @ObjectIdColumn()
  cinemaId: ObjectID;

  @Column()
  hallId: ObjectID;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  price: number;

  @Column()
  status: boolean;

  @ManyToOne(() => Cinema, (cinema) => cinema.sessions)
  cinema: Cinema;

  @ManyToOne(() => Movie, (movie) => movie.sessions)
  movie: Movie;
  orders: Order[];
}
