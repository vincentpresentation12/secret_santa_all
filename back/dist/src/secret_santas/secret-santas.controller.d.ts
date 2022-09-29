import { SecretSantasService } from './secret-santas.service';
import { SecretSanta } from './secret-santa.entity';
import { SecretSantaDto } from './dto/secret-santa.dto';
import { UserDto } from "src/users/dto/user.dto";
export declare class SecretSantasController {
    private secretSantasService;
    constructor(secretSantasService: SecretSantasService);
    createSecretSanta(data: UserDto[]): Promise<SecretSanta>;
    findOne(uuid: string): Promise<SecretSanta | null>;
    updateSecretSanta(uuid: string, data: SecretSantaDto): Promise<SecretSanta | undefined>;
    deleteSecretSanta(uuid: string): Promise<SecretSanta | undefined>;
}
