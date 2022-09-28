import { SecretSanta } from './secret-santa.entity';
import { Repository } from 'typeorm';
import { SecretSantaDto } from './dto/secret-santa.dto';
export declare class SecretSantasService {
    private secretSantaRepository;
    constructor(secretSantaRepository: Repository<SecretSanta>);
    findOne(uuid: string): Promise<SecretSanta | null>;
    createSecretSanta(data: SecretSantaDto): Promise<SecretSanta>;
    updateSecretSanta(uuid: string, data: SecretSantaDto): Promise<SecretSanta | undefined>;
    deleteSecretSanta(uuid: string): Promise<SecretSanta | undefined>;
}
