import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './modules/question.module';
import { dataSourceOptions } from '../db/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), QuestionModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
