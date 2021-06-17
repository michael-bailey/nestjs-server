import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
	IDField,
	PagingStrategies,
	QueryOptions,
	CursorConnection,
} from '@nestjs-query/query-graphql';
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '../Post/Post.model';

@ObjectType()
@QueryOptions({ pagingStrategy: PagingStrategies.CURSOR })
@CursorConnection('posts', () => Post, { disableRemove: true })
@Entity()
export class User {
	@IDField(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column()
	userName!: string;

	// Todo: add salt and hashing
	@Field()
	@Column()
	passWord!: string;

	@Field()
	@Column()
	firstName!: string;

	@Field()
	@Column()
	lastName!: string;

	@CreateDateColumn()
	@Field(() => GraphQLISODateTime)
	created!: Date;

	@OneToMany(() => Post, post => post.owner)
	posts?: Promise<Array<Post>>;
}
