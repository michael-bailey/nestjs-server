import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './Modules/Post/Post.module';
import { UserModule } from './Modules/Users/User.module';
import { AuthModule } from './Modules/auth/auth.module';
import { AdminModule } from './Modules/admin/admin.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
			debug: false,
			playground: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'public'),
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
		AdminModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
