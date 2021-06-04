import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './User.model';

@Resolver(() => User)
export class UserResolver {
	@Query(() => User)
	async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
		const a = new User();
		return a;
	}

	@Query(() => User)
	async viewer(): Promise<User | null> {
		return null;
	}

	@Mutation()
	async createUser(): Promise<User | null> {
		return null;
	}
}
