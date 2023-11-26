import { Module } from '@nestjs/common';
import { CodebitsController } from './codebits.controller';
import { CodebitsService } from './codebits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Codebit } from './codebits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Codebit])],
  controllers: [CodebitsController],
  providers: [CodebitsService],
})
export class CodebitsModule {}
