import { Test, TestingModule } from '@nestjs/testing';
import { CodebitsController } from '../../src/codebits/codebits.controller';

describe('CodebitsController', () => {
  let controller: CodebitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodebitsController],
    }).compile();

    controller = module.get<CodebitsController>(CodebitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
