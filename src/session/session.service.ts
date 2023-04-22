import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { Session } from './session.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionRepository.create(createSessionDto);
    return this.sessionRepository.save(session);
  }

  findAll(): Promise<Session[]> {
    return this.sessionRepository.find();
  }

  findOne(id: ObjectID): Promise<Session> {
    return this.sessionRepository.findOne({ where: { id } });
  }

  async update(
    id: ObjectID,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    await this.sessionRepository.update(id, updateSessionDto);
    return this.sessionRepository.findOne({ where: { id } });
  }

  async remove(id: ObjectID): Promise<void> {
    await this.sessionRepository.delete(id);
  }
}
