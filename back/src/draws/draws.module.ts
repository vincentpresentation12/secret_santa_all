import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretSantasModule } from '../secret_santas/secret-santas.module';
import { Draw } from './draw.entity';
import { DrawsService } from './draws.service';

@Module({
  imports: [TypeOrmModule.forFeature([Draw])],
  providers: [DrawsService],
  exports: [DrawsService],
})
export class DrawsModule {}
