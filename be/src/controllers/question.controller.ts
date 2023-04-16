import { Controller, Get } from '@nestjs/common';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getQuestions() {
    const questions = await this.questionService.getRandomQuestions();
    return questions;
  }
}
