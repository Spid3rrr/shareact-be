import { TypeOrmModule } from '@nestjs/typeorm';
import { Codebit } from '../codebits/codebits.entity';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Codebit],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Codebit]),
];
