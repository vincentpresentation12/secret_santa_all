import { Injectable } from '@nestjs/common';
import { SecretSanta } from './secret-santa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SecretSantaDto } from './dto/secret-santa.dto';
import { User } from '../users/user.entity';
import { Draw } from '../draws/draw.entity';
import { UserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
//import { CreateUserInput } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class SecretSantasService {
  constructor(
    @InjectRepository(SecretSanta) private secretSantaRepository: Repository<SecretSanta>,
    private usersService: UsersService
  ) {}


  async findOne(uuid: string) {
    return await SecretSanta.findOne({ where: { uuid } });
  }

  async createSecretSanta(usersDto: UserDto[]) {
    const newSecretSanta = new SecretSanta();

    let users: User[] = [];
    for (const userDto of usersDto) {
      let user = await this.usersService.findOne(userDto.username);
      if(user != null){
        users.push(user);
      }
    }

    newSecretSanta.uuid = uuidv4();
    newSecretSanta.draws = await this.draw(users);
    await newSecretSanta.save();

    return newSecretSanta;
  }

  async draw(users: User[]){
    let draws: Draw[] = [];
    let giftee = users.slice();
    
    for(const user of users){
      let randomElement = Math.floor(Math.random() * giftee.length);
      while(giftee[randomElement].uuid == user.uuid){
        randomElement = Math.floor(Math.random() * giftee.length);
      }
      let draw = new Draw();
      draw.uuid = uuidv4();
      draw.santa = user.uuid;
      draw.giftee = giftee[randomElement].uuid;
      draws.push(draw);
      console.log(user.uuid,giftee[randomElement].uuid);
      giftee.splice(randomElement,1);
      await draw.save();
    }
    return draws;
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
