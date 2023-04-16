import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Question } from '../entities/question.entity';
import { questionSampleData } from '../data/question.data';

class QuestionSeeder implements Seeder {
  async run(dataSource: DataSource) {
    const questions: Question[] = questionSampleData;
    await dataSource.createEntityManager().save<Question>(questions)
  }
}

export default QuestionSeeder;
