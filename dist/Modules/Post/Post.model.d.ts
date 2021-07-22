import { User } from '../Users/User.model';
export declare class Post {
    id: string;
    title: string;
    body: string;
    owner?: Promise<User>;
}
