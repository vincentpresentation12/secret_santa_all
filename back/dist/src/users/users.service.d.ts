import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAllUsers(currentUser: User): Promise<User[]>;
    findOne(username: string): Promise<User | null>;
    createUser(data: CreateUserInput): Promise<User>;
    findUserWithRobots(uuid: string): Promise<User | null>;
    findUserWithSac(uuid: string): Promise<User | null>;
    updateUser(uuid: string, data: UpdateUserDto): Promise<User | undefined>;
    deleteUser(uuid: string): Promise<User | undefined>;
    findUserByUuid(uuid: string): Promise<User | null>;
}
