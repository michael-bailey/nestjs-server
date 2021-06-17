import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../Users/User.model';
import { UserService } from '../Users/User.service';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UserService,
		private jwtService: JwtService,
	) {}

	async validateUser(username: string, password: string): Promise<User | null> {
		let users = await this.usersService.findByUsername(username);
		users = users.filter(user => user.passWord == password);
		return users[0] ?? null;
	}

	async login(user: User) {
		const payload = { userName: user.userName, id: user.id };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
