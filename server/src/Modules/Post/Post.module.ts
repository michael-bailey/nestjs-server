import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Post.model';
import { PostService } from './Post.service';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
	imports: [
		TypeOrmModule.forFeature([Post]),
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Post])],
			resolvers: [{ DTOClass: Post, EntityClass: Post }],
		}),
	],
	providers: [PostService],
	controllers: [],
})
export class PostModule {}
