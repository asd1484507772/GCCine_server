import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Controller('cinemas')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post()
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemaService.create(createCinemaDto);
  }

  @Get()
  findAll() {
    return this.cinemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.cinemaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: ObjectID, @Body() updateCinemaDto: UpdateCinemaDto) {
    return this.cinemaService.update(id, updateCinemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectID) {
    return this.cinemaService.remove(id);
  }
}
