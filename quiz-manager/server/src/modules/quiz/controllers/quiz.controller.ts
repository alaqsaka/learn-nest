import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Param,
  Res,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizService } from '../services/quiz.service';
import { Response } from 'express';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Get(':id')
  async getQuizById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    // return await this.quizService.getQuizById(id);

    // console.log(params.id);
    const quiz = await this.quizService.getQuizById(id);

    if (quiz == null)
      res
        .status(HttpStatus.NOT_FOUND)
        .json({
          success: 'error',
          message: 'Quiz not found',
        })
        .send();
    // return quiz;
    else
      res
        .json({
          success: 'success',
          ...quiz,
        })
        .send();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
