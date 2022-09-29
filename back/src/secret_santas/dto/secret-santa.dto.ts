import { IsString } from 'class-validator';

export class SecretSantaDto {
  @IsString()
  uuid: string;

  @IsString()
  draw: string[];
}