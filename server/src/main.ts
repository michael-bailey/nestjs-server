import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	// static resources.
	app.useStaticAssets(join(__dirname, '..', 'public'));

	// handlebars setup.
	app.setBaseViewsDir(join(__dirname, '..', 'Views'));
	hbs.registerPartials(join(__dirname, '..', 'Views', 'partials'));

	// setting view engine as handlebars.
	app.setViewEngine('hbs');

	await app.listen(3000);
}
bootstrap();
