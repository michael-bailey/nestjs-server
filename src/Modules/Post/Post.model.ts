import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import {
	IDField,
	PagingStrategies,
	QueryOptions,
	Relation,
} from '@nestjs-query/query-graphql';
import { User } from '../Users/User.model';

@ObjectType()
@QueryOptions({ pagingStrategy: PagingStrategies.CURSOR })
@Relation('owner', () => Post, { disableRemove: true })
@Entity()
export class Post {
	@IDField(() => String)
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	body!: string;

	@ManyToOne(() => User)
	owner?: Promise<User>;
}
