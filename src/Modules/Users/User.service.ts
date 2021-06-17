import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './User.model';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
	) {}

	async findAll(): Promise<Array<User>> {
		return await this.userRepository.find();
	}

	async findOneById(id: string): Promise<User | null> {
		try {
			return await this.userRepository.findOne(id);
		} catch (e) {
			return null;
		}
	}

	async findByUsername(userName: string): Promise<Array<User>> {
		return await this.userRepository.find({ where: { userName } });
	}
}
