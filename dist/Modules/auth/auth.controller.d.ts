/// <reference types="passport" />
import { Request } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    authIndex(): Promise<string>;
    getJWT(req: Request): Promise<{
        access_token: string;
    }>;
    getStatus(req: Request): Promise<Express.User>;
}
