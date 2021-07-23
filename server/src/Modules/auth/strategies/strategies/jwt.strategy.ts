import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/Modules/Users/User.service';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private authService: AuthService,
		private userService: UserService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: 'This is a secret XD',
		});
	}

	async validate(payload: { id: string; username: string }) {
		return await this.userService.findOneById(payload.id);
	}
}
