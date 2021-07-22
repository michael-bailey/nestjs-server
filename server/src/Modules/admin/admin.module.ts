import { Module } from '@nestjs/common';
import { AdminController } from './AdminConsole.Controller';

@Module({
	controllers: [AdminController],
})
export class AdminModule {}
