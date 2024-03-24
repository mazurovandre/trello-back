import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { StatusEnum } from '../../schemas/Task.schema';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  id: number;
  title: string;
  description?: string;
  status: StatusEnum;
}
