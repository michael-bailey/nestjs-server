import { Repository } from 'typeorm';
import { Post } from './Post.model';
export declare class PostService {
    private readonly userRepository;
    constructor(userRepository: Repository<Post>);
    findAll(): Promise<Array<Post>>;
}
