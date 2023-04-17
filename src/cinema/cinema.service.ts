import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { Cinema } from './cinema.entity';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(Cinema)
    private cinemaRepository: Repository<Cinema>,
  ) {}

  create(createCinemaDto: CreateCinemaDto): Promise<Cinema> {
    const cinema = this.cinemaRepository.create(createCinemaDto);

    return this.cinemaRepository.save(cinema);
  }

  findAll(): Promise<Cinema[]> {
    return this.cinemaRepository.find();
  }

  findOne(id: ObjectID): Promise<Cinema> {
    return this.cinemaRepository.findOne({ where: { id } });
  }

  async update(
    id: ObjectID,
    updateCinemaDto: UpdateCinemaDto,
  ): Promise<Cinema> {
    await this.cinemaRepository.update(id, updateCinemaDto);
    return this.cinemaRepository.findOne({ where: { id } });
  }

  async remove(id: ObjectID): Promise<void> {
    await this.cinemaRepository.delete(id);
  }
}
