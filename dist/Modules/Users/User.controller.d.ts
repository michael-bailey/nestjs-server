import { UserService } from './User.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    allUsers(): Promise<string>;
    fromID(id: string): Promise<string>;
}
