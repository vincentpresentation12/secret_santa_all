import { BaseEntity } from 'typeorm';
import { SecretSanta } from '../secret_santas/secret-santa.entity';
export declare class Draw extends BaseEntity {
    uuid: string;
    santa: string;
    giftee: string;
    secretSanta: SecretSanta;
    createdAt: Date;
    updatedAt?: Date;
}
