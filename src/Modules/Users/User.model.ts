import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
	@Field(() => Int)
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Field({ nullable: true })
	@Column()
	firstName?: string;

	@Field({ nullable: true })
	@Column()
	lastName?: string;
}
