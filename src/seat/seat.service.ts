import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { Seat } from './seat.entity';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
  ) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const newSeat = this.seatRepository.create(createSeatDto);
    return this.seatRepository.save(newSeat);
  }

  findAll(): Promise<Seat[]> {
    return this.seatRepository.find({ relations: ['hall'] });
  }

  findOne(id: ObjectID): Promise<Seat> {
    return this.seatRepository.findOne({ where: { id } });
  }

  async update(id: ObjectID, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    await this.seatRepository.update(id, updateSeatDto);
    return this.seatRepository.findOne({ where: { id } });
  }

  remove(id: ObjectID): Promise<void> {
    return this.seatRepository.delete(id).then(() => null);
  }
}
