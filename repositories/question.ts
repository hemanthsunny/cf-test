import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  async getRandomQuestions(): Promise<Question[]> {
    const query = this.createQueryBuilder('question')
      .where('question.isDuplicate = false')
      .orderBy('RAND()')
      .limit(5);

    return query.getMany();
  }
}
