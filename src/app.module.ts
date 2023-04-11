import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CinemaModule } from './cinema/cinema.module';
import { MovieModule } from './movie/movie.module';
import { SessionModule } from './session/session.module';
import { SeatModule } from './seat/seat.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '101.33.248.7',
      port: 27017,
      database: 'gccine',
      username: 'GCCine',
      password: 'Lb417327220',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logging: true,
    }),
    UserModule,
    CinemaModule,
    MovieModule,
    SessionModule,
    SeatModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
