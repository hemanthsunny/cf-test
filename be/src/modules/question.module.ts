import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuestionController } from '../controllers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
