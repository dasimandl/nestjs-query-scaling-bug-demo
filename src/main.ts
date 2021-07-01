import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { performance } from 'perf_hooks';

async function bootstrap() {
  const startTime = performance.now();
  const app = await NestFactory.create(AppModule);
  const endTime = performance.now();
  console.log(`AppModule load time: ${endTime - startTime}ms`);
  await app.listen(3000);
}
bootstrap();
