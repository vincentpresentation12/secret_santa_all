import { SecretSantasService } from './secret-santas.service';
import { SecretSanta } from './secret-santa.entity';
import { SecretSantaDto } from './dto/secret-santa.dto';
export declare class SecretSantasController {
    private secretSantasService;
    constructor(secretSantasService: SecretSantasService);
    createUser(data: SecretSantaDto): Promise<SecretSanta>;
    findUserByUuid(uuid: string): Promise<SecretSanta | null>;
    updateUser(uuid: string, data: SecretSantaDto): Promise<SecretSanta | undefined>;
    deleteUser(uuid: string): Promise<SecretSanta | undefined>;
}
