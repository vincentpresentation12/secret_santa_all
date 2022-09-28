import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(data: CreateUserInput): Promise<User>;
    findAllUsers(currentUser: User): Promise<User[]>;
    findUserByUuid(uuid: string): Promise<User | null>;
    updateUser(uuid: string, data: UpdateUserDto): Promise<User | undefined>;
    deleteUser(uuid: string): Promise<User | undefined>;
}
