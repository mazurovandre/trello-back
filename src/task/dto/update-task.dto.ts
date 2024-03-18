import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { StatusEnum } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  id: number;
  title: string;
  description?: string;
  status: StatusEnum;
}
