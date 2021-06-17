import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './User.service';

@Controller('api/users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@UseGuards(JwtGuard)
	@Get('all')
	async allUsers(): Promise<string> {
		return JSON.stringify(await this.userService.findAll());
	}

	@UseGuards(JwtGuard)
	@Get('from_id/:id')
	async fromID(@Param('id') id: string): Promise<string> {
		return JSON.stringify(await this.userService.findOneById(id));
	}
}
