import { Controller, Get, Render, UseGuards } from '@nestjs/common';

import { LocalGuard } from '../auth/guards/local-auth.guard';

@Controller('admin')
export class AdminController {
	@Get()
	@Render('admin')
	async index() {
		return { message: 'Hello world!' };
	}
}
