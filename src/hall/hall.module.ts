import { Module } from '@nestjs/common';
import { HallController } from './hall.controller';
import { HallService } from './hall.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hall } from './hall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hall])],
  controllers: [HallController],
  providers: [HallService],
  exports: [HallService],
})
export class HallModule {}
