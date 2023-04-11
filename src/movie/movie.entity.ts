import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Session } from '../session/session.entity';

/*

id：一个唯一的UUID，作为电影的主键。
title：电影的标题。
releaseDate：电影的上映日期。
director：电影的导演（可选）。
genre：电影的类型（可选）。
duration：电影的时长，以分钟为单位（可选）。 

*/
@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  releaseDate: Date;

  @Column({ nullable: true })
  director?: string;

  @Column({ nullable: true })
  genre?: string;

  @Column({ nullable: true })
  duration?: number;

  @OneToMany(() => Session, (session) => session.movie, {
    cascade: true,
  })
  sessions: Session[];
}
