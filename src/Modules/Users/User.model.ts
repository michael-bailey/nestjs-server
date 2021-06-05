import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NodeType } from 'nestjs-relay';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@NodeType()
@Entity()
export class User {
	@Field(() => String)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field({ nullable: true })
	@Column()
	firstName?: string;

	@Field({ nullable: true })
	@Column()
	lastName?: string;

	@Field()
	aNumber?: number;
}
