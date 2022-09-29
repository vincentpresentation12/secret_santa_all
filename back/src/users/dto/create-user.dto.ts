import { IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  username: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
