import { Module } from '@nestjs/common';
import { SecretSantasService } from './secret-santas.service';
import { SecretSantasController } from './secret-santas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretSanta } from './secret-santa.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([SecretSanta]),UsersModule],
  controllers: [SecretSantasController],
  providers: [SecretSantasService],
  exports: [SecretSantasService],
})
export class SecretSantasModule {}
