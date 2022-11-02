import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}
}
