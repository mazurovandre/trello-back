import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'hello',
      description: '1213',
      status: null,
    },
  ];

  create(createTaskDto: CreateTaskDto) {
    const task = {
      id: Date.now(),
      title: createTaskDto.title,
      description: createTaskDto.description || null,
      status: null,
    };

    this.tasks.push(task);

    return task;
  }

  findAll() {
    return this.tasks;
  }

  findIndexById(id: number) {
    const index = this.tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return index;
  }

  findOne(id: number) {
    const index = this.findIndexById(id);

    return this.tasks[index];
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const index = this.findIndexById(id);

    this.tasks[index] = {
      ...this.tasks[index],
      ...updateTaskDto,
    };

    return this.tasks[index];
  }

  remove(id: number) {
    const index = this.findIndexById(id);

    return this.tasks.splice(index, 1);
  }
}
