import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StatusEnum, Task } from '../schemas/Task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  create(createTaskDto: CreateTaskDto) {
    const newTask = new this.taskModel({
      title: createTaskDto.title,
      description: createTaskDto.description || null,
      status: StatusEnum.New,
      priority: 0,
    });

    return newTask.save();
  }

  findAll() {
    return this.taskModel.find();
  }

  findIndexById(id: number) {
    return this.taskModel.findById(id);
  }

  findOne(id: string) {
    return this.taskModel.findById(id);
    // this._id = id;
    // const index = this.findIndexById(id);

    // return this.tasks[index];
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return [id, updateTaskDto];
    // const index = this.findIndexById(id);
    //
    // this.tasks[index] = {
    //   ...this.tasks[index],
    //   ...updateTaskDto,
    // };
    //
    // return this.tasks[index];
  }

  remove(id: number) {
    return id;
    // const index = this.findIndexById(id);
    //
    // return this.tasks.splice(index, 1);
  }
}
