import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Ye zaroori hai taake poori app mein use ho sake
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
