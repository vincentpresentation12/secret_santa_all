import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import config from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { SecretSantasModule } from './secret_santas/secret-santas.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    UsersModule,
    AuthModule,
    SecretSantasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
