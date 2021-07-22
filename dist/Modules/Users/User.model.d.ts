import { Post } from '../Post/Post.model';
export declare class User {
    id: string;
    userName: string;
    passWord: string;
    firstName: string;
    lastName: string;
    created: Date;
    posts?: Promise<Array<Post>>;
}
