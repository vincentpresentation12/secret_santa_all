import { BaseEntity } from 'typeorm';
export declare class SecretSanta extends BaseEntity {
    uuid: string;
    draw: string[];
    createdAt: Date;
    updatedAt?: Date;
}
