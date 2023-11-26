import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CodebitsService } from './codebits.service';
import { Codebit } from './codebits.entity';
import { CreateCodebitDto } from './create-codebit.dto';
import { UpdateCodebitDto } from './update-codebit.dto';

@Controller('codebits')
export class CodebitsController {
  constructor(private readonly codebitsService: CodebitsService) {}

  @Get()
  async findAll(): Promise<Codebit[]> {
    return await this.codebitsService.findAll();
  }

  @Get('id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Codebit | null> {
    return await this.codebitsService.findOne(id);
  }

  @Post()
  async create(@Body() createCodebitDto: CreateCodebitDto): Promise<Codebit> {
    return await this.codebitsService.create(createCodebitDto);
  }

  @Post('id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCodebitDto: UpdateCodebitDto,
  ): Promise<Codebit> {
    return await this.codebitsService.update(id, updateCodebitDto);
  }

  @Delete('id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<Codebit> {
    return await this.codebitsService.delete(id);
  }
}
