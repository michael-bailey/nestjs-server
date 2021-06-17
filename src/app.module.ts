import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './Modules/Post/Post.module';
import { UserModule } from './Modules/Users/User.module';
import { AuthModule } from './Modules/auth/auth.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
			debug: false,
			playground: true,
		}),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'my-secret-pw',
			database: 'main',
			autoLoadEntities: true,
			synchronize: true,
		}),
		UserModule,
		PostModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
