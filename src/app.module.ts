import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalIdScalar } from 'nestjs-relay';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './Modules/Post/Post.module';
import { UserModule } from './Modules/Users/User.module';

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
	],
	controllers: [AppController],
	providers: [AppService, GlobalIdScalar],
})
export class AppModule {}
