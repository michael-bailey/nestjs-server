import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './Post.model';

@Injectable()
export class PostService {
	constructor(
		@InjectRepository(Post)
		private readonly userRepository: Repository<Post>,
	) {}

	async findAll(): Promise<Array<Post>> {
		return await this.userRepository.find();
	}
}
