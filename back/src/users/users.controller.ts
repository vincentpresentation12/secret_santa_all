import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {CurrentUser} from "../common/decorator/current-user.decorator";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() data: CreateUserInput) {
    return this.usersService.createUser(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
    getAllUsers(@CurrentUser() user: User) {
    return this.usersService.findAll();
  }

  @Get('/:uuid')
  @UseGuards(JwtAuthGuard)
  findUserByUuid(@Param('uuid') uuid: string) {
    return this.usersService.findUserByUuid(uuid);
  }


  @Put('/:uuid')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Param('uuid') uuid: string, @Body() data: UpdateUserDto) {
    return this.usersService.updateUser(uuid, data);
  }

  //   @Get('/:uuid/sac')
  //   //@UseGuards(JwtAuthGuard)
  //   async findUserWithSac(uuid: string) {
  //   return await User.findOne({ where: { uuid }, relations: ['sac', "sac.arme", "sac.tenue", "sac.bouclier"]  });
  // }



  @Delete('/:uuid')
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Param('uuid') uuid: string): Promise<User | undefined> {
    return this.usersService.deleteUser(uuid);
  }
}
