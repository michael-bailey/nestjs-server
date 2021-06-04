import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './User.controller';
import { User } from './User.model';
import { UserResolver } from './User.resolver';
import { UserService } from './User.service';

@Module({
	imports: [TypeOrmModule.forFeature([User]), UserResolver],
	providers: [UserService],
	controllers: [UserController],
})
export class UserModule {}
