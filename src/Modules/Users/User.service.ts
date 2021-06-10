import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Post } from '../Post/Post.model';
import { User } from './User.model';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
	) {}

	async findAll(): Promise<Array<User>> {
		return await this.userRepository.find();
	}

	async findOneById(arg0: string): Promise<User | null> {
		throw new Error('Method not implemented.');
	}
}
