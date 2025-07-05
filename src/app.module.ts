import { Module } from '@nestjs/common';
import { EnvironmentRunnerImple } from './config/env-runner';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [EnvironmentRunnerImple],
})

export class AppModule {}
