import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    // check if quiz exist
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createNewQuestion(question, quiz);
  }
}
