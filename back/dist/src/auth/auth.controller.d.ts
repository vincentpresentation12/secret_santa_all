import { AuthService } from './auth.service';
import { CreateUserInput } from '../users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    register(data: CreateUserInput): Promise<import("../users/user.entity").User>;
}
