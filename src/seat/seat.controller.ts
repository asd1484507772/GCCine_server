import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ObjectID } from 'typeorm';

@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.seatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectID, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(id, updateSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectID) {
    return this.seatService.remove(id);
  }
}
