import { Module } from '@nestjs/common';
import { EnvironmentRunnerImple } from './config/env-runner';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './application/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
  ],
  controllers: [],
  providers: [EnvironmentRunnerImple],
})

export class AppModule {}
