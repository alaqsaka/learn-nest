import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action return a #${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  //   @HttpCode(204)
  @Redirect('https://nestjs.com', 301)
  @Header('Cache-Control', 'none')
  findAll(@Req() request: Request): string {
    return 'This action return all cats';
  }
}
