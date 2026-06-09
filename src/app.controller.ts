import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // Ye full path ban gaya: /api/hello
  getHello(): any {
    return { 
      message: "Updated again Hello from NestJS!",
      status: "success",
      timestamp: new Date().toISOString()
    };
  }
}
