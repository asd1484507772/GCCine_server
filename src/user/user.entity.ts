import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  Unique,
  BeforeInsert,
} from 'typeorm';
import { Order } from '../order/order.entity';

import * as bcrypt from 'bcrypt';

/*
id：用户的唯一标识符。
name：用户的名字。
email：用户的电子邮件地址，我们使用了@Unique装饰器来确保电子邮件地址的唯一性。
password：用户的密码。在插入之前，我们会使用@BeforeInsert装饰器和hashPassword方法对其进行加密。
isAdmin：一个布尔值，表示用户是否是管理员，默认为false。
*/
@Entity('users')
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  // 其他必要属性

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
  orders: Order[];
}
