import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Representa a classe principal do sistema.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true,}); //habilita o cors
  //porta parametrizada via variável de ambiente.
  await app.listen(process.env.APP_PORT);
}
bootstrap();
