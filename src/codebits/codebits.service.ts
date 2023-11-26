import { Injectable, NotFoundException } from '@nestjs/common';
import { Codebit } from './codebits.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCodebitDto } from './create-codebit.dto';
import { UpdateCodebitDto } from './update-codebit.dto';

@Injectable()
export class CodebitsService {
  constructor(
    @InjectRepository(Codebit)
    private codeBitsRepository: Repository<Codebit>,
  ) {}

  async findAll(): Promise<Codebit[]> {
    return await this.codeBitsRepository.find();
  }

  async findOne(id: string): Promise<Codebit | null> {
    return await this.codeBitsRepository.findOne({ where: { id: id } });
  }

  async create(createCodebitDto: CreateCodebitDto): Promise<Codebit> {
    return await this.codeBitsRepository.save(createCodebitDto);
  }

  async update(
    id: string,
    updateCodebitDto: UpdateCodebitDto,
  ): Promise<Codebit> {
    const codebit = await this.codeBitsRepository.findOne({
      where: { id: id },
    });
    if (!codebit) {
      throw new NotFoundException();
    }
    return await this.codeBitsRepository.save({
      ...codebit,
      ...updateCodebitDto,
    });
  }

  async delete(id: string): Promise<Codebit> {
    const codebit = await this.codeBitsRepository.findOne({
      where: { id: id },
    });
    if (!codebit) {
      throw new NotFoundException();
    }
    await this.codeBitsRepository.delete(codebit.id);
    return codebit;
  }
}
