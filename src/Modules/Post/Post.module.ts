import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Post.model';
import { PostResolver } from './Post.resolver';
import { PostService } from './Post.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post]), PostResolver],
	providers: [PostService],
	controllers: [],
})
export class PostModule {}
