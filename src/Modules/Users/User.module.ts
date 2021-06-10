import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './User.controller';
import { User } from './User.model';
import { UserService } from './User.service';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([User])],
			resolvers: [{ DTOClass: User, EntityClass: User }],
		}),
	],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
