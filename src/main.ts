/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Utilisation du filtre d'exception global
  app.useGlobalFilters(new HttpExceptionFilter());

  // Activation de CORS
  app.enableCors();

  // Ajout d'une validation globale des entrées
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Démarrage de l'application
  await app.listen(3000);
}
bootstrap();
