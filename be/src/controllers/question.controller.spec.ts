import { Test, TestingModule } from '@nestjs/testing';
import { QuestionController } from './question.controller';
import { QuestionService } from '../services/question.service';

describe('QuestionController', () => {
  let controller: QuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionController],
      providers: [QuestionService],
    }).compile();

    controller = module.get<QuestionController>(QuestionController);
    service = module.get<QuestionService>(QuestionService);
  });

  describe('getRandomQuestions', () => {
    it('should return an array of 5 questions', async () => {
      const result = [
        { id: 1, text: 'How are you feeling today?' },
        { id: 2, text: 'What is your interest?' },
        { id: 3, text: 'Which is your birthplace?' },
        { id: 4, text: 'What are you doing this weekend?' },
        { id: 5, text: 'Tell me something about yourself!' },
      ];
      jest.spyOn(service, 'getRandomQuestions').mockResolvedValue(result);

      const questions = await controller.getRandomQuestions();
      expect(questions).toHaveLength(5);
      expect(questions).toEqual(result);
    });
  });
});
