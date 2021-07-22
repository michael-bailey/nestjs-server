import { Strategy } from 'passport-jwt';
import { UserService } from 'src/Modules/Users/User.service';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    validate(payload: {
        id: string;
        username: string;
    }): Promise<import("../../Users/User.model").User>;
}
export {};
