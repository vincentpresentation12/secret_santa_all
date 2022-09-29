import { BaseEntity } from 'typeorm';
import { Draw } from '../draws/draw.entity';
export declare class SecretSanta extends BaseEntity {
    uuid: string;
    draws: Draw[];
    createdAt: Date;
    updatedAt?: Date;
}
