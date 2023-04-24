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
import { HallService } from './hall.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';

@Controller('halls')
export class HallController {
  constructor(private readonly hallService: HallService) {}

  // 获取所有影厅
  @Get()
  findAll() {
    return this.hallService.findAll();
  }

  // 根据ID获取影厅
  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.hallService.findOne(id);
  }

  // 创建影厅
  @Post()
  create(@Body() createHallDto: CreateHallDto) {
    return this.hallService.create(createHallDto);
  }

  // 更新影厅
  @Put(':id')
  update(@Param('id') id: ObjectID, @Body() updateHallDto: UpdateHallDto) {
    return this.hallService.update(id, updateHallDto);
  }

  // 删除影厅
  @Delete(':id')
  remove(@Param('id') id: ObjectID) {
    return this.hallService.remove(id);
  }
}
