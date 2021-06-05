import {
	Args,
	Int,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver,
} from '@nestjs/graphql';
import { GlobalIdFieldResolver } from 'nestjs-relay';
import { User } from './User.model';

@Resolver(() => User)
export class UserResolver extends GlobalIdFieldResolver(User) {
	@Query(() => User)
	async user(@Args('id', { type: () => Int }) _id: number): Promise<User> {
		const a = new User();
		return a;
	}

	@Query(() => User)
	async viewer(): Promise<User | null> {
		return null;
	}

	@Mutation(() => User)
	async createUser(): Promise<User | null> {
		return null;
	}

	@ResolveField()
	async aNumber(@Parent() user: User): Promise<number> {
		return 10;
	}
}
