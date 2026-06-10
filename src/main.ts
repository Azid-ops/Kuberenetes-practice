import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Instance get karne ka sahi tareeqa
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT') || 3000; // Default fallback bhi zaroori hai
  console.log("Hello");
  console.log(port);
  
  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();