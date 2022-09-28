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
  import { SecretSantasService } from './secret-santas.service';
  import { SecretSanta } from './secret-santa.entity';
  import { SecretSantaDto } from './dto/secret-santa.dto';
  import {CurrentUser} from "../common/decorator/current-user.decorator";
  import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
  
  @Controller('secret-santas')
  export class SecretSantasController {
    constructor(private secretSantasService: SecretSantasService) {}
  
    @Post()
    createUser(@Body() data: SecretSantaDto) {
      return this.secretSantasService.createSecretSanta(data);
    }
  
    @Get('/:uuid')
      @UseGuards(JwtAuthGuard)
    findUserByUuid(@Param('uuid') uuid: string) {
      return this.secretSantasService.findOne(uuid);
    }
  
  
    @Put('/:uuid')
    @UseGuards(JwtAuthGuard)
    async updateUser(@Param('uuid') uuid: string, @Body() data: SecretSantaDto) {
      return this.secretSantasService.updateSecretSanta(uuid, data);
    }
  
    //   @Get('/:uuid/sac')
    //   //@UseGuards(JwtAuthGuard)
    //   async findUserWithSac(uuid: string) {
    //   return await User.findOne({ where: { uuid }, relations: ['sac', "sac.arme", "sac.tenue", "sac.bouclier"]  });
    // }
  
  
  
    @Delete('/:uuid')
    @UseGuards(JwtAuthGuard)
    async deleteUser(@Param('uuid') uuid: string): Promise<SecretSanta | undefined> {
      return this.secretSantasService.deleteSecretSanta(uuid);
    }
  }
  