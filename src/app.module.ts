import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CinemaModule } from './cinema/cinema.module';
// import { MovieModule } from './movie/movie.module';
// import { SessionModule } from './session/session.module';
// import { SeatModule } from './seat/seat.module';
// import { OrderModule } from './order/order.module';
// import { PostsEntity } from './posts/posts.entity';
// import { PostsModule } from './posts/posts.module';
import { Cinema } from './cinema/cinema.entity';
import { Session } from './session/session.entity';
import { Movie } from './movie/movie.entity';
import { User } from './user/user.entity';
import envConfig from '../config/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '101.33.248.7',
      port: 27017,
      database: 'gccine',
      username: 'GCCine',
      password: 'Lb417327220',
      entities: [User, Cinema, Session, Movie],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logging: true,
    }),
    UserModule,
    CinemaModule,
    // MovieModule,
    // SessionModule,
    // SeatModule,
    // OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
