import { Test, TestingModule } from '@nestjs/testing';
import { CodebitsController } from './codebits.controller';
import { TypeOrmSQLITETestingModule } from '../utils/in-mem-test-db';
import { CodebitsService } from './codebits.service';

describe('CodebitsController', () => {
  let controller: CodebitsController;
  const testing_db = TypeOrmSQLITETestingModule();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...testing_db],
      controllers: [CodebitsController],
      providers: [CodebitsService],
    }).compile();

    controller = module.get<CodebitsController>(CodebitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a codebit', async () => {
    const codebit = await controller.create({
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
    await controller.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const codebits = await controller.findAll();
    expect(codebits).toBeDefined();
    expect(codebits.length).toEqual(1);
  });

  it('should find one codebit', async () => {
    const codebit = await controller.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const found = await controller.findOne(codebit.id);
    expect(found).toBeDefined();
    expect(found.id).toEqual(codebit.id);
  });

  it('should update a codebit', async () => {
    const codebit = await controller.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const updated = await controller.update(codebit.id, {
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
    expect(updated.html).toEqual('updated');
    expect(updated.css).toEqual('updated');
    expect(updated.javascript).toEqual('updated');
  });

  it('should delete a codebit', async () => {
    const codebit = await controller.create({
      title: 'test',
      description: 'test',
      html: 'test',
      css: 'test',
      javascript: 'test',
    });
    const deleted = await controller.delete(codebit.id);
    expect(deleted).toBeDefined();
    expect(deleted.id).toEqual(codebit.id);
  });
});
