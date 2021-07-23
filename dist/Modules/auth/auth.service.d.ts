import { JwtService } from '@nestjs/jwt';
import { User } from '../Users/User.model';
import { UserService } from '../Users/User.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
