import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.useGlobalPipes(new ValidationPipe({forbidUnknownValues: false}));
  await app.listen(7000);
}
bootstrap();
