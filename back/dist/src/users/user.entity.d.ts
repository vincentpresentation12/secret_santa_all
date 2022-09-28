import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    uuid: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
