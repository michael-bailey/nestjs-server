import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../Users/User.model';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt-auth.guard';
import { LocalGuard } from './guards/local-auth.guard';

@Controller('api/auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get()
	async authIndex() {
		return '<h1>Auth Index</h1>';
	}

	@UseGuards(LocalGuard)
	@Post('login')
	async getJWT(@Req() req: Request) {
		return this.authService.login(req.user as User);
	}

	@UseGuards(JwtGuard)
	@Get('status')
	async getStatus(@Req() req: Request) {
		return req.user;
	}
}
