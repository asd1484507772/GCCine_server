import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { Hall } from './hall.entity';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';

@Injectable()
export class HallService {
  constructor(
    @InjectRepository(Hall)
    private hallRepository: Repository<Hall>,
  ) {}

  // 获取所有影厅
  findAll(): Promise<Hall[]> {
    return this.hallRepository.find();
  }

  // 根据ID获取影厅
  findOne(id: ObjectID): Promise<Hall> {
    return this.hallRepository.findOneOrFail(id as any);
  }

  // 创建影厅
  create(createHallDto: CreateHallDto): Promise<Hall> {
    return this.hallRepository.save(createHallDto);
  }

  // 更新影厅
  async update(id: ObjectID, UpdateHallDto: UpdateHallDto): Promise<Hall> {
    await this.hallRepository.update(id, UpdateHallDto);
    return this.hallRepository.findOne({ where: { id } });
  }

  // 删除影厅
  async remove(id: ObjectID): Promise<void> {
    await this.hallRepository.delete(id);
  }
}
