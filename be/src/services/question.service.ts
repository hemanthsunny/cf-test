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

    console.log("all questions - comes from database", questions);

    // Group questions by category
    const grouped = questions.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = [];
      }
      acc[curr.category].push(curr);
      return acc;
    }, {});
    console.log("questions has been grouped by category", grouped);


    // Pick 1 random question from each category
    const selected = Object.keys(grouped).reduce((acc, curr) => {
      const questions = grouped[curr];
      const randomIndex = Math.floor(Math.random() * questions.length);
      acc.push(questions[randomIndex]);
      return acc;
    }, []);
    console.log("pick 1 question from each category", selected);


    // Pick additional random questions until we have 5 in total
    while (selected.length < 5) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestion = questions[randomIndex];
      if (!selected.includes(randomQuestion) && !randomQuestion.category) {
        selected.push(randomQuestion);
      }
    }

    const finalFive = selected.splice(0, 5);
    console.log("finalFive", finalFive);


    return finalFive; // 5 random questions from selected list
  }
}
