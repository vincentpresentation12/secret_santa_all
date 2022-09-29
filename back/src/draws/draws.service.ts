import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Draw } from './draw.entity';
//import { CreateUserInput } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class DrawsService {
  constructor(
    @InjectRepository(Draw) private drawRepository: Repository<Draw>
  ) {}


  async findOne(uuid: string) {
    return await Draw.findOne({ where: { uuid } });
  }

}