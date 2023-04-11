import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from './seat.entity';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
  ) {}

  create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = this.seatRepository.create(createSeatDto);
    return this.seatRepository.save(seat);
  }

  findAll(): Promise<Seat[]> {
    return this.seatRepository.find();
  }

  findOne(id: string): Promise<Seat> {
    return this.seatRepository.findOne({ where: { id } });
  }

  async update(id: string, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    await this.seatRepository.update(id, updateSeatDto);
    return this.seatRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.seatRepository.delete(id);
  }
}
