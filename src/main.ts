import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import configuration from './config/configuration';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Campuss Mall')
    .setDescription('This is Backend for Campuss-mall App')
    .setVersion('1.0')
    .addTag('campuss-mall')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configuration().port || 3000);
  const base = `${await app.getUrl()}`;
  console.log(`For Documentation: ${base}`);
  console.log(`Application is running on:  ${base}/api`);
}
bootstrap();
