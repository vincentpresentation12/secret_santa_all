import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        uuid: string;
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        isAdmin: boolean;
        createdAt: Date;
        updatedAt?: Date | undefined;
    }>;
}
export {};
