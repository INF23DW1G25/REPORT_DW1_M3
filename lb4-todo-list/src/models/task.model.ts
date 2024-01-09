import {Entity, model, property} from '@loopback/repository';

@model()
export class Task extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    default: null,
  })
  conclusion_date?: string;

  @property({
    type: 'string',
    required: true,
    default: 'pending'
  })
  status: string;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'number',
  })
  category_id?: number;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
