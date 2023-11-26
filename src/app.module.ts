import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodebitsModule } from './codebits/codebits.module';
import { Codebit } from './codebits/codebits.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [Codebit],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CodebitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
