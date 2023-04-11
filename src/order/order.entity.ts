import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Session } from '../session/session.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Session, (session) => session.orders)
  @JoinColumn({ name: 'sessionId' })
  session: Session;

  @Column()
  userId: string;

  @Column()
  sessionId: string;

  @Column()
  numberOfTickets: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;
}
