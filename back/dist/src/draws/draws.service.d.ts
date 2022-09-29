import { Repository } from 'typeorm';
import { Draw } from './draw.entity';
export declare class DrawsService {
    private drawRepository;
    constructor(drawRepository: Repository<Draw>);
    findOne(uuid: string): Promise<Draw | null>;
}
