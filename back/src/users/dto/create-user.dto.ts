import { IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  username: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  password: string;
}
