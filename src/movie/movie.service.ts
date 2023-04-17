// movie/movie.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOne(id: ObjectID): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async update(id: ObjectID, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    await this.movieRepository.update(id, updateMovieDto);
    return this.movieRepository.findOne({ where: { id } });
  }

  async remove(id: ObjectID): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
