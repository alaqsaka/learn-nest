import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
