import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

    async findAll() {
    return await this.userRepository.find();
  }

  async findOne(username: string) {
    return await User.findOne({ where: { username } });
  }

  async createUser(data: CreateUserInput) {
    const hashedPw = await bcrypt.hash(data.password, 10);
    const newUser = new User();

    newUser.uuid = uuidv4();
    newUser.username = data.username;
    newUser.password = hashedPw;
    newUser.firstname = data.firstname;
    newUser.lastname = data.lastname;
    newUser.email = data.email;


    await newUser.save();

    return newUser;
  }

  // // get user with robots
  // async findUserWithRobots(uuid: string) {
  //   return await User.findOne({ where: { uuid }, relations: ['robot'] });
  // }

    // get user join sac join tenue join arme join bouclier
  //   async findUserWithSac(uuid: string) {
  //   return await User.findOne({ where: { uuid }, relations: ['sac', "sac.arme", "sac.tenue", "sac.bouclier"]  });
  // }


  async updateUser(uuid: string, data: UpdateUserDto) {
    const user = await this.findUserByUuid(uuid);
    if (user) {
      user.username = data.username;
      await user.save();
      return user;
    }
  }

  async deleteUser(uuid: string): Promise<User | undefined> {
    const user = await this.findUserByUuid(uuid);
    if (user) {
      return await this.userRepository.remove(user);
    }
  }

  async findUserByUuid(uuid: string) {
    return await User.findOne({ where: { uuid } });
  }
}
