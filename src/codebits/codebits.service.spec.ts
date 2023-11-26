import { Test, TestingModule } from '@nestjs/testing';
import { CodebitsService } from '../../src/codebits/codebits.service';
import { TypeOrmSQLITETestingModule } from '../utils/in-mem-test-db';

describe('CodebitsService', () => {
  let service: CodebitsService;
  const testing_db = TypeOrmSQLITETestingModule();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testing_db],
      providers: [CodebitsService],
    }).compile();
    service = module.get<CodebitsService>(CodebitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a codebit', async () => {
    const codebit = await service.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    expect(codebit).toBeDefined();
    expect(codebit.id).toBeDefined();
    expect(codebit.title).toEqual('test');
    expect(codebit.description).toEqual('test');
  });

  it('should find all codebits', async () => {
    await service.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const codebits = await service.findAll();
    expect(codebits).toBeDefined();
    expect(codebits.length).toEqual(1);
  });

  it('should find one codebit', async () => {
    const codebit = await service.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const found = await service.findOne(codebit.id);
    expect(found).toBeDefined();
    expect(found.id).toEqual(codebit.id);
  });

  it('should update a codebit', async () => {
    const codebit = await service.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const updated = await service.update(codebit.id, {
      title: 'updated',
      description: 'updated',
      html: 'updated',
      css: 'updated',
      javascript: 'updated',
    });
    expect(updated).toBeDefined();
    expect(updated.id).toEqual(codebit.id);
    expect(updated.title).toEqual('updated');
    expect(updated.description).toEqual('updated');
  });

  it('should delete a codebit', async () => {
    const codebit = await service.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const deleted = await service.delete(codebit.id);
    expect(deleted).toBeDefined();
    expect(deleted.id).toEqual(codebit.id);
    const found = await service.findOne(codebit.id);
    expect(found).toBeNull();
  });
});
