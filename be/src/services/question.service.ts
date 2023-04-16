import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async getRandomQuestions(): Promise<Question[]> {
    const questions = await this.questionRepository.find();

    // Group questions by category
    const grouped = questions.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = [];
      }
      acc[curr.category].push(curr);
      return acc;
    }, {});

    // Pick 1 random question from each category
    const selected = Object.keys(grouped).reduce((acc, curr) => {
      const questions = grouped[curr];
      const randomIndex = Math.floor(Math.random() * questions.length);
      acc.push(questions[randomIndex]);
      return acc;
    }, []);

    // Pick additional random questions until we have 5 in total
    while (selected.length < 5) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuestion = data[randomIndex];
      if (!selected.includes(randomQuestion) && !randomQuestion.isRedundant) {
        selected.push(randomQuestion);
      }
    }

    return selected;
  }
}
