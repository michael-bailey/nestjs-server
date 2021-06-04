import { Controller, Get } from '@nestjs/common';
import { UserService } from './User.service';

@Controller()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/api/users')
	async allUsers(): Promise<string> {
		return JSON.stringify(await this.userService.findAll());
	}
}
