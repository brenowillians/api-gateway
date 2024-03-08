import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.useGlobalPipes(new ValidationPipe({forbidUnknownValues: false}));

  const options = new DocumentBuilder()
  .setTitle('API docs')
  .setVersion('1.0')
  .addBearerAuth({
    description: 'Infomar o JWT para autorizar o acesso',
    name: 'Authorization',
    scheme: 'Bearer',
    type: 'http',
    in: 'Header',
  })
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(7000);
}
bootstrap();
