import { Repository } from 'typeorm';
import { User } from './User.model';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<Array<User>>;
    findOneById(id: string): Promise<User | null>;
    findByUsername(userName: string): Promise<Array<User>>;
}
