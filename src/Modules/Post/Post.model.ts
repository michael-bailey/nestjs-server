import { Field, Int } from '@nestjs/graphql';
import { NodeType } from 'nestjs-relay';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@NodeType()
@Entity()
export class Post {
	@Field(() => Int)
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	body!: string;
}
