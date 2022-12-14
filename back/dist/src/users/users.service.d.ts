import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | null>;
    createUser(data: CreateUserInput): Promise<User>;
    updateUser(uuid: string, data: UpdateUserDto): Promise<User | undefined>;
    deleteUser(uuid: string): Promise<User | undefined>;
    findUserByUuid(uuid: string): Promise<User | null>;
}
