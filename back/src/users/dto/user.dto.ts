import { IsString } from 'class-validator';

export class UserDto {

  @IsString()
  username: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  password: string;
}