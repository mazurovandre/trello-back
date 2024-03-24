import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  status: StatusEnum;

  @Prop({ required: false })
  priority: number;
}

export enum StatusEnum {
  New = 'new',
  InProgress = 'inProgress',
  InReview = 'inReview',
  Done = 'done',
}

export const TaskSchema = SchemaFactory.createForClass(Task);
