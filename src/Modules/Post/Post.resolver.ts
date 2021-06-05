import {
	Args,
	Int,
	Mutation,
	ResolveField,
	Parent,
	Resolver,
	Query,
} from '@nestjs/graphql';
import { Post } from './Post.model';

@Resolver(() => Post)
export class PostResolver {
	@Mutation(() => Post)
	async createPost(): Promise<Post | null> {
		return null;
	}
}
