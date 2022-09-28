import { Injectable } from '@nestjs/common';
import { SecretSanta } from './secret-santa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SecretSantaDto } from './dto/secret-santa.dto';
//import { CreateUserInput } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class SecretSantasService {
  constructor(
    @InjectRepository(SecretSanta) private secretSantaRepository: Repository<SecretSanta>,
  ) {}


  async findOne(uuid: string) {
    return await SecretSanta.findOne({ where: { uuid } });
  }

  async createSecretSanta(data: SecretSantaDto) {
    const newSecretSanta = new SecretSanta();

    newSecretSanta.uuid = uuidv4();

    await newSecretSanta.save();

    return newSecretSanta;
  }


  async updateSecretSanta(uuid: string, data: SecretSantaDto) {
    const secretSanta = await this.findOne(uuid);
    if (secretSanta) {
      secretSanta.uuid = data.uuid;
      await secretSanta.save();
      return secretSanta;
    }
  }

  async deleteSecretSanta(uuid: string): Promise<SecretSanta | undefined> {
    const secretSanta = await this.findOne(uuid);
    if (secretSanta) {
      return await this.secretSantaRepository.remove(secretSanta);
    }
  }

}
