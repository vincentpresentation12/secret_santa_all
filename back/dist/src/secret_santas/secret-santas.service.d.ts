import { SecretSanta } from './secret-santa.entity';
import { Repository } from 'typeorm';
import { SecretSantaDto } from './dto/secret-santa.dto';
import { User } from '../users/user.entity';
import { Draw } from '../draws/draw.entity';
import { UserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
export declare class SecretSantasService {
    private secretSantaRepository;
    private usersService;
    constructor(secretSantaRepository: Repository<SecretSanta>, usersService: UsersService);
    findOne(uuid: string): Promise<SecretSanta | null>;
    createSecretSanta(usersDto: UserDto[]): Promise<SecretSanta>;
    draw(users: User[]): Promise<Draw[]>;
    updateSecretSanta(uuid: string, data: SecretSantaDto): Promise<SecretSanta | undefined>;
    deleteSecretSanta(uuid: string): Promise<SecretSanta | undefined>;
}
